import { Typography } from 'src/components/share/Typography'

import styles from './EmailEnterBlock.module.scss'

// import { SubmitHandler, useForm } from 'react-hook-form'

export const EmailBlock = () => {
  return (
    <div className={styles.emailBlock}>
      <Typography variant="HeaderM">What’s your email address?</Typography>
      <Typography variant="ParagraphL">
        We’ll send you a six-digit code. It expires 10 minutes after your
        request.
      </Typography>
      <form className={styles.emailForm}>
        <div className={styles.emailInputBox}>
          <input
            className={styles.emailFormInput}
            type="email"
            name="email"
            id="email"
            placeholder=""
            onChange={(e) => console.log(e.target.value)}
          />
          <label htmlFor="email">Your email address</label>
        </div>
        <button className={styles.emailContinueButton} type="submit">
          {' '}
          Continue{' '}
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
