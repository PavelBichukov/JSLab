import { ChangeEventHandler } from 'react'

import { Typography } from 'components/share/Typography'

import styles from './FormInput.module.scss'

type InputProps = {
  name: string | undefined
}

const FormInput = ({
  label,
  errorMessage,
  onChange,
  inputProps,
}: {
  label: string
  errorMessage: string
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
  inputProps?: InputProps
}) => {
  return (
    <div className={styles.formInput}>
      <Typography variant="LabelXL">{label}</Typography>
      <input
        {...inputProps}
        onChange={onChange}
        onFocus={() => inputProps?.name === 'confirmPassword'}
      />
      <span className={styles.errorMessages}>{errorMessage}</span>
    </div>
  )
}

export default FormInput
