import cn from 'classnames'
import { useState } from 'react'

import { ReactComponent as ClosedEyeIcon } from 'assets/icons/ClosedEye.svg'
import { ReactComponent as EyeIcon } from 'assets/icons/Eye.svg'
import { Typography } from 'components/share/Typography'

import styles from './Input.module.scss'
import { IInputProps } from './Input.types'

export const Input = ({
  variant,
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
        type={variant === 'password' && showPass ? 'text' : variant}
        placeholder=""
        id={id}
        onChange={onChange}
      />
      <Typography
        className={labelClassName}
        variant="ParagraphL"
        component="label"
        htmlFor={id}
      >
        {label}
      </Typography>
      {!showPass ? (
        <EyeIcon
          className={cn(styles.eyeIcon, {
            [styles.eyeIconHidden]: variant !== 'password',
          })}
          onClick={() => setShowPass(!showPass)}
        />
      ) : (
        <ClosedEyeIcon
          className={cn(styles.eyeIcon, {
            [styles.eyeIconHidden]: variant !== 'password',
          })}
          onClick={() => setShowPass(!showPass)}
        />
      )}
    </div>
  )
}

export default Input
