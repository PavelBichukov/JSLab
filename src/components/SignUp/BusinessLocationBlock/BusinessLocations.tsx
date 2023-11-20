import debounce from 'lodash.debounce'
import { useForm } from 'react-hook-form'

import {
  Button,
  FormController,
  Input,
  Select,
  Typography,
} from 'components/share'
import { loadOptions, signUpLocation } from 'src/api'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import { stateOptions } from './BusinessLocation.constants'
import styles from './BusinessLocation.module.scss'

const BusinessLocation = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.user.email)

  const {
    control,
    setError,
    getValues,
    setValue,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      streetAddress: '',
      secondaryStreetAddress: '',
      city: '',
      state: '' as any,
      zipCode: '',
    },
  })

  const setValues = () => {
    const locationValue = getValues('streetAddress') as unknown as {
      value: string
      label: string
    }
    setValue('city', locationValue?.label?.split(', ')[2])
    setValue(
      'state',
      stateOptions.find(
        (option: { value: string; label: string }) =>
          option.value === locationValue?.label?.split(', ')[4]
      )
    )
    setValue('zipCode', locationValue?.label?.split(', ')[5])
  }

  const onSubmit = async (data: any, e: any) => {
    console.log(data)
    const nextData = { ...data, email }
    e.preventDefault()
    try {
      const response = await signUpLocation(nextData)
      const { status, message } = response && response.data
      if (status === 'UPDATED') {
        dispatch(setCurrentStep(SIGN_UP_STEPS.TERMS_AND_CONDITIONS))
      } else {
        throw new Error(message)
      }
    } catch (error) {
      console.log(error.message)
      if (error.message === 'User with the provided email already exists') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'User with the provided email already exists',
        })
      } else {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Oops... Something go wrong',
        })
      }
    }
  }

  return (
    <div className={styles.main}>
      <Typography variant="HeaderM">Where are you located?</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        Search using your business street address or enter manually.
      </Typography>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <FormController
            errorClassName={styles.streetError}
            name="streetAddress"
            control={control}
            rules={{
              required: 'Street address is required!',
            }}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                type="async"
                searchable="true"
                placeholder="Street Address"
                loadOptions={debounce(loadOptions, 800)}
                cacheOptions
                onBlur={setValues()}
                value={field.value}
              />
            )}
          />
          <FormController
            name="secondaryStreetAddress"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Secondary Address (optional)"
                id="secondaryStreetAddress"
              />
            )}
          />
          <div className={styles.cityStateBox}>
            <FormController
              rootClassName={styles.city}
              name="city"
              control={control}
              rules={{
                required: 'City is required!',
              }}
              render={({ field }: any) => (
                <Input
                  {...field}
                  innerRef={field.ref}
                  ref={null}
                  variant="text"
                  label="City"
                  id="city"
                />
              )}
            />
            <FormController
              errorClassName={styles.stateError}
              rootClassName={styles.state}
              name="state"
              control={control}
              rules={{
                required: 'State is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={stateOptions}
                  placeholder="ST"
                  maxMenuHeight={80}
                />
              )}
            />
          </div>
          <FormController
            name="zipCode"
            control={control}
            rules={{
              required: 'Zip code is required!',
              pattern: {
                value: /^[0-9]*$/,
                message: 'Zip code must contain only numbers!',
              },
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                innerRef={field.ref}
                ref={null}
                variant="text"
                label="Zip"
                id="zipCode"
              />
            )}
          />
        </div>
        <div className={styles.buttonsBlock}>
          <Button
            className={styles.buttonBack}
            type="button"
            mode="outlinedWhite"
            variant="secondary"
            size="small"
            onClick={() =>
              dispatch(setCurrentStep(SIGN_UP_STEPS.BUSINESS_INFO))
            }
          >
            Back
          </Button>
          <Button
            className={styles.buttonFinished}
            type="submit"
            mode={isValid ? 'defaultBlack' : 'disabled'}
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Finished
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BusinessLocation
