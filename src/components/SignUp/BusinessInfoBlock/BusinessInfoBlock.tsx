import { useForm } from 'react-hook-form'

import {
  Button,
  Checkbox,
  FormController,
  Input,
  Select,
  Typography,
} from 'components/share'
import { signUpBusiness } from 'src/api'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import { businessTypeOptions, yearsOptions } from './BusinessInfo.constants'
import styles from './BusinessInfoBlock.module.scss'

export const BusinessInfoBlock = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.user.email)

  const {
    control,
    setError,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      businessName: '',
      yearsOfOperation: '',
      businessType: '',
      checkboxBusiness: '',
    },
  })

  const onSubmit = async (data: any, e: any) => {
    console.log(data)
    const nextData = { ...data, email }
    e.preventDefault()
    try {
      const response = await signUpBusiness(nextData)
      const { status, message } = response && response.data
      if (status === 'UPDATED') {
        dispatch(setCurrentStep(SIGN_UP_STEPS.BUSINESS_LOCATION))
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
      <Typography variant="HeaderM">Tell us about your business</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        We’ll use this information to verify your organization.
      </Typography>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormController
            name="businessName"
            control={control}
            rules={{
              required: 'Business Legal Name is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Business Legal Name"
                id="businessName"
              />
            )}
          />
          <div className={styles.selectsGroup}>
            <FormController
              errorClassName={styles.selectError}
              name="yearsOfOperation"
              control={control}
              rules={{
                required: 'Years of Operation is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={yearsOptions}
                  placeholder="Years of Operation"
                />
              )}
            />
            <FormController
              errorClassName={styles.selectError}
              name="businessType"
              control={control}
              rules={{
                required: 'Business type is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={businessTypeOptions}
                  placeholder="Business type"
                />
              )}
            />
          </div>
          <div className={styles.checkBoxBlock}>
            <FormController
              errorClassName={styles.checkBoxError}
              name="checkboxBusiness"
              control={control}
              rules={{
                required: 'Field is required!',
              }}
              render={({ field }: any) => (
                <Checkbox
                  {...field}
                  ref={null}
                  id="checkboxBusiness"
                  hasError={!!errors?.checkboxBusiness}
                />
              )}
            />
            <Typography variant="ParagraphL">
              I am an authorized representative with authority to create an
              business account for my organization.
            </Typography>
          </div>
        </div>
        <div className={styles.buttonsBlock}>
          <Button
            className={styles.buttonBack}
            type="button"
            mode="outlinedWhite"
            variant="secondary"
            size="small"
            onClick={() => dispatch(setCurrentStep(SIGN_UP_STEPS.SUCCESS))}
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

export default BusinessInfoBlock
