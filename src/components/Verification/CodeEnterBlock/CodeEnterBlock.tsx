import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'

import { Typography } from 'components/share/Typography'
import { Button } from 'src/components/share'

import styles from './CodeEnterBlock.module.scss'

export const CodeEnterBlock = () => {
  const [code, setCode] = useState('' as string)
  const [error, setError] = useState(false)

  const emailAddress = 'email.com'
  const correctCode = '123456'
  const isCorrectCode = code === correctCode

  const handleChange = (newValue: string) => {
    setCode(newValue)
  }

  const handleSubmit = () => {
    isCorrectCode ? (console.log(code), setError(false)) : setError(true)
  }

  return (
    <div className={styles.codeEnterBlock}>
      <Typography variant="HeaderM"> Confirm your email address? </Typography>
      <Typography variant="ParagraphL">
        Enter the 6-digit code that we sent to your email address {emailAddress}
      </Typography>
      <div className={styles.codeForm}>
        <MuiOtpInput
          className={styles.codeOtpInput}
          value={code}
          onChange={handleChange}
          length={6}
          autoFocus
        />
        {error && (
          <Typography className={styles.errorMessage} variant="ParagraphM">
            The code you entered does not match the one sent to your email.
            Check input is correct
          </Typography>
        )}
        <Button
          className={styles.formButton}
          type="submit"
          mode={code.length === 6 ? 'defaultBlack' : 'disabled'}
          variant="secondary"
          size="large"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CodeEnterBlock
