import axios from 'axios'
import { useForm } from 'react-hook-form'

import { Button, FormController, Input, Typography } from 'components/share'

import styles from './EmailEnterBlock.module.scss'

export const EmailBlock = ({
  currentStep,
  setCurrentStep,
  email,
  setEmail,
}) => {
  const {
    control,
    formState: { isValid },
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
      await axios
        .post('http://localhost:5000/user/signup', {
          data,
        })
        .then((res) => {
          if (res?.data?.status === 'PENDING') {
            setEmail(email + data.email)
            setCurrentStep(currentStep + 1)
          } else if (res?.data?.status == 'FAILED') {
            alert('User already exists')
          }
        })
        .catch((e) => {
          alert('wrong details')
          console.log(e)
        })
    } catch (e) {
      console.log(e)
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
            rules={{
              required: 'Email address is required!',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email address!',
              },
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="email"
                label="Your email address"
                id="email"
              />
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
