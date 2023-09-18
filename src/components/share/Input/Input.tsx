import { IInputProps } from './Input.types'
import { ReactComponent as EyeIcon } from 'assets/icons/Eye.svg'
import { ReactComponent as ClosedEyeIcon } from 'assets/icons/ClosedEye.svg'
import cn from 'classnames'

import styles from './Input.module.scss'
import { useState } from 'react'

export const Input = ({
  type,
  className,
  onChange,
  label,
  labelClassName,
  id,
  ...restProps
}: IInputProps) => {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className={styles.inputBox}>
      <input
        {...restProps}
        className={cn(styles.input, className)}
        type={type === 'password' && showPass ? 'text' : type}
        placeholder=""
        id={id ? id : 'customInput'}
        onChange={onChange}
      />
      <label
        className={cn(styles.label, labelClassName)}
        htmlFor={id ? id : 'customInput'}
      >
        {label}
      </label>
      {!showPass ? (
        <EyeIcon
          className={
            type === 'password'
              ? styles.eyeIcon
              : cn(styles.eyeIcon, styles.eyeIconHidden)
          }
          onClick={() => setShowPass(!showPass)}
        />
      ) : (
        <ClosedEyeIcon
          className={
            type === 'password'
              ? styles.eyeIcon
              : cn(styles.eyeIcon, styles.eyeIconHidden)
          }
          onClick={() => setShowPass(!showPass)}
        />
      )}
    </div>
  )
}

export default Input
