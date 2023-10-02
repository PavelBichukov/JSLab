import axios from 'axios'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Controller, useForm } from 'react-hook-form'

import { Button, Typography } from 'components/share'

import styles from './CodeEnterBlock.module.scss'

export const CodeEnterBlock = ({ currentStep, setCurrentStep, email }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      otp: '',
    },
  })

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault()
    data.email = email
    try {
      await axios
        .post('http://localhost:5000/user/verifyOTP', {
          data,
        })
        .then((res) => {
          if (res?.data?.status === 'VERIFIED') {
            setCurrentStep(currentStep + 1)
          } else if (res?.data?.status == 'FAILED') {
            alert('Incorrect code!')
          }
        })
        .catch((e) => {
          alert('Something go wrong!')
          console.log(e)
        })
    } catch (e) {
      console.log(e)
    }
  }

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
