import { MuiOtpInput } from 'mui-one-time-password-input'
import { Controller, useForm } from 'react-hook-form'

import { Typography } from 'components/share/Typography'
import { Button } from 'src/components/share'

import styles from './CodeEnterBlock.module.scss'

export const CodeEnterBlock = () => {
  const emailAddress = 'email.com'
  const correctCode = '123456'

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

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className={styles.codeEnterBlock}>
      <Typography variant="HeaderM"> Confirm your email address? </Typography>
      <Typography variant="ParagraphL">
        Enter the 6-digit code that we sent to your email address {emailAddress}
      </Typography>
      <form className={styles.codeForm} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="otp"
          control={control}
          rules={{
            required: 'Code Enter is required!',
            validate: (value) => value === correctCode,
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
                >
                  {fieldState.error?.type === 'required'
                    ? fieldState.error?.message
                    : `The code you entered does not match the one sent to your email.
                Check input is correct`}
                </Typography>
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
