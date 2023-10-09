import { useForm } from 'react-hook-form'

import { Button, FormController, Input, Typography } from 'components/share'
import { signUpEmail } from 'src/api/api'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { setCurrentStep } from 'src/store/signUp'
import { setEmail } from 'src/store/user'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './EmailEnterBlock.module.scss'

export const EmailBlock = () => {
  const dispatch = useAppDispatch()
  const {
    control,
    setError,
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault()
    try {
      const response = await signUpEmail(data)
      const { status, message } = response && response.data
      if (status === 'PENDING') {
        dispatch(setEmail(data.email))
        dispatch(setCurrentStep(SIGN_UP_STEPS.OTP_CODE))
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
    <div className={styles.emailBlock}>
      <Typography variant="HeaderM">What’s your email address?</Typography>
      <Typography variant="ParagraphL">
        We’ll send you a six-digit code. It expires 10 minutes after your
        request.
      </Typography>
      <form className={styles.emailForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormController
            control={control}
            {...register('email')}
            rules={{
              required: 'Email address is required!',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email address!',
              },
            }}
            render={({ field }: any) => (
              <div>
                <Input
                  {...field}
                  ref={null}
                  variant="email"
                  label="Your email address"
                  id="email"
                />
                {errors.root ? (
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
        </div>
        <Button
          className={styles.formButton}
          type="submit"
          mode={isValid ? 'defaultBlack' : 'disabled'}
          variant="secondary"
          size="large"
          onClick={() => console.log('clicked')}
        >
          Continue
        </Button>
      </form>
      <Typography variant="ParagraphS" className={styles.emailAgreement}>
        By tapping Continue, you confirm that you are authorized to use the
        email address entered and agree to receive emails messages to verify you
        own the email. Carrier fees may apply..
      </Typography>
    </div>
  )
}

export default EmailBlock
