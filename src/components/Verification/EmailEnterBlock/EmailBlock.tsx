import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import { Button, FormController, Input, Typography } from 'components/share'
import { signUpEmail } from 'src/api/api'

import { setCurrentStep } from 'src/store/slices/signUpSlice'

import styles from './EmailEnterBlock.module.scss'

export const EmailBlock = ({
  currentStep,
  setCurrentStep,
  email,
  setEmail,
}) => {

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
      const status = await response?.data?.status
      if (status === 'PENDING') {
        setEmail(email + data.email)
        setCurrentStep((currentStep) => currentStep + 1)
      } else {
        throw new Error(response.data.message)
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
        console.error(error)
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
            name="email"
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
