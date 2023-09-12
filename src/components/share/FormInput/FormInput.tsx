import { useState } from 'react'

import { Typography } from 'components/share/Typography'

import styles from './FormInput.module.scss'

const FormInput = ({ label, errorMessage, onChange, ...inputProps }) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className={styles.formInput}>
      <Typography variant="LabelXL">{label}</Typography>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={styles.errorMessages}>{errorMessage}</span>
    </div>
  )
}

export default FormInput
