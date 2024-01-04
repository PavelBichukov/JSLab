import { MuiOtpInput } from 'mui-one-time-password-input'
import { Controller, useForm } from 'react-hook-form'

import { Button, Typography } from 'components/share'
import { verifyOTP } from 'src/api'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './CodeEnterBlock.module.scss'

export const CodeEnterBlock = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.user.email)
  const {
    control,
    handleSubmit,
    setError,
    register,
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
      const { status, message } = response && response.data
      if (status === 'VERIFIED') {
        dispatch(setCurrentStep(SIGN_UP_STEPS.SUCCESS))
      } else {
        throw new Error(message)
      }
    } catch (error) {
      console.log(error.message)
      if (error.message === 'Invalid code passed. Check your inbox.') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Incorrect code',
        })
      } else {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Oops... Something go wrong',
        })
        console.error(error)
      }
    }
  }
  return (
    <div className={styles.codeEnterBlock}>
      <Typography variant="HeaderM"> Confirm your email address? </Typography>
      <Typography variant="ParagraphL">
        Enter the 6-digit code that we sent to your email address
      </Typography>
      <form className={styles.codeForm} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          {...register('otp')}
          rules={{
            required: 'Code Enter is required!',
          }}
          render={({ field }) => (
            <div>
              <MuiOtpInput
                className={styles.codeOtpInput}
                {...field}
                length={6}
                autoFocus
              />
              {errors ? (
                <Typography
                  className={styles.errorMessage}
                  variant="ParagraphM"
                >
                  {errors?.root?.serverError.type === 'FAILED' && (
                    <p>{errors?.root?.serverError.message}</p>
                  )}
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
