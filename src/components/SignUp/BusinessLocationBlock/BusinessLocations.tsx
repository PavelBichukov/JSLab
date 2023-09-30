import { useForm } from 'react-hook-form'

import {
  Button,
  FormController,
  Input,
  Select,
  Typography,
} from 'components/share'

import styles from './BusinessLocation.module.scss'
import { stateOptions } from './BusinessLocation.constants'

const BusinessLocation = () => {
  const {
    control,
    getValues,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      streetAddress: '',
      secondaryStreetAddress: '',
      city: '',
      state: '',
      zipCode: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className={styles.main}>
      <Typography variant="HeaderM">Where are you located?</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        Search using your business street address or enter manually.
      </Typography>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputsBox}>
          <FormController
            name="streetAddress"
            control={control}
            rules={{
              required: 'Street address is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Street Address"
                id="streetAddress"
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
            onClick={() => console.log(getValues())}
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
