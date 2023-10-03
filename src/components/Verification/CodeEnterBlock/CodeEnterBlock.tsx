import { MuiOtpInput } from 'mui-one-time-password-input'
import { Controller, useForm } from 'react-hook-form'

import { Button, Typography } from 'components/share'
import { verifyOTP } from 'src/api/api'

import styles from './CodeEnterBlock.module.scss'

export const CodeEnterBlock = ({ currentStep, setCurrentStep, email }) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      otp: '',
    },
  })

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault()
    const nextData = { ...data, email }
    try {
      const response = await verifyOTP(nextData)
      const status = await response?.data?.status
      if (status === 'VERIFIED') {
        setCurrentStep((currentStep) => currentStep + 1)
      } else {
        throw new Error('Incorrect code!')
      }
    } catch (error) {
      console.log(error)
      // if (error.message === 'Incorrect code!') {
      //   alert('Incorrect code!')
      // } else {
      //   alert('Something went wrong!')
      //   console.error(error)
      // }
    }
  }
  // console.log(`errors: ${errors}`)
  return (
    <div className={styles.codeEnterBlock}>
      <Typography variant="HeaderM"> Confirm your email address? </Typography>
      <Typography variant="ParagraphL">
        Enter the 6-digit code that we sent to your email address {email}
      </Typography>
      <form className={styles.codeForm} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="otp"
          control={control}
          rules={{
            required: 'Code Enter is required!',
          }}
          render={({ field, fieldState }) => (
            <div>
              <MuiOtpInput
                className={styles.codeOtpInput}
                {...field}
                length={6}
                autoFocus
              />
              {fieldState.error ? (
                <Typography
                  className={styles.errorMessage}
                  variant="ParagraphM"
                ></Typography>
              ) : null}
            </div>
          )}
        />
        <Button
          className={styles.formButton}
          type="submit"
          mode={isValid ? 'defaultBlack' : 'disabled'}
          variant="secondary"
          size="large"
          onClick={() => console.log(errors)}
        >
          Continue
        </Button>
      </form>
    </div>
  )
}

export default CodeEnterBlock
