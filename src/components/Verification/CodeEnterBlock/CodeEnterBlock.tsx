import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'

import { Typography } from 'components/share/Typography'

import styles from './CodeEnterBlock.module.scss'

export const CodeEnterBlock = () => {
  const emailAddress = 'email.com'
  const [code, setCode] = useState('' as string)

  const handleChange = (newValue: string) => {
    setCode(newValue)
  }

  return (
    <div className={styles.codeEnterBlock}>
      <Typography variant="HeaderM"> Confirm your email address? </Typography>
      <Typography variant="ParagraphL">
        Enter the 6-digit code that we sent to your email address {emailAddress}
      </Typography>
      <form className={styles.codeForm}>
        <MuiOtpInput
          className={styles.codeOtpInput}
          value={code}
          onChange={handleChange}
          length={6}
          autoFocus
        />
        <button className={styles.codeEnterContinueButton} type="submit">
          Continue
        </button>
      </form>
    </div>
  )
}

export default CodeEnterBlock
