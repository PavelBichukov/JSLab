import { IInputProps } from './Input.types'
import { ReactComponent as EyeIcon } from 'assets/icons/Eye.svg'
import { ReactComponent as ClosedEyeIcon } from 'assets/icons/ClosedEye.svg'
import cn from 'classnames'

import styles from './Input.module.scss'
import { useState } from 'react'
import { Typography } from 'components/share/Typography'

// export const Input = ({
//   variant,
//   className,
//   onChange,
//   label,
//   labelClassName,
//   id,
//   ...restProps
// }: IInputProps) => {
//   const [showPass, setShowPass] = useState(false)

//   return (
//     <div className={styles.inputBox}>
//       <input
//         {...restProps}
//         className={cn(styles.input, className)}
//         type={variant === 'password' && showPass ? 'text' : variant}
//         placeholder=""
//         id={id}
//         onChange={onChange}
//       />
//       <label
//         className={cn(styles.label, labelClassName)}
//         htmlFor={id}
//       >
//         {label}
//       </label>
//       {!showPass ? (
//         <EyeIcon
//           className={cn(styles.eyeIcon, {[styles.eyeIconHidden] : variant !== 'password'})}
//           onClick={() => setShowPass(!showPass)}
//         />
//       ) : (
//         <ClosedEyeIcon
//           className={cn(styles.eyeIcon, {[styles.eyeIconHidden] : variant !== 'password'})}
//           onClick={() => setShowPass(!showPass)}
//         />
//       )}
//     </div>
//   )
// }

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
