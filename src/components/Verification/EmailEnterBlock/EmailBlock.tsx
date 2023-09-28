import cn from 'classnames'
import { useForm } from 'react-hook-form'

import { Typography } from 'components/share/Typography'

import { Input, FormController, Button } from 'src/components/share'

import styles from './EmailEnterBlock.module.scss'

export const EmailBlock = () => {
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

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className={styles.emailBlock}>
      <Typography variant="HeaderM">What’s your email address?</Typography>
      <Typography variant="ParagraphL">
        We’ll send you a six-digit code. It expires 10 minutes after your
        request.
      </Typography>
      <form className={styles.emailForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.emailInputBox}>
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
