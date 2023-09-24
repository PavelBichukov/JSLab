import { Typography } from 'components/share/Typography'

import styles from './EmailEnterBlock.module.scss'
import { useForm, Controller } from 'react-hook-form'
import { Input } from 'src/components/share'

export const EmailBlock = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
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
          <Controller
            defaultValue={''}
            name="email"
            control={control}
            rules={{
              required: 'Field is required!',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email address!',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                innerRef={field.ref}
                variant="email"
                label="Your email address"
                id="email"
              ></Input>
            )}
          />
          {errors?.email && (
            <p className={styles.errorMessage}>
              {errors?.email?.message as string}
              {errors?.pattern?.message as string}
            </p>
          )}
        </div>
        <button
          className={styles.emailContinueButton}
          type="submit"
          disabled={!isValid}
        >
          Continue
        </button>
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
