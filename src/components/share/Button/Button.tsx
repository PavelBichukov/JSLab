import cn from 'classnames'

import styles from './Button.module.scss'

const MODES = {
  defaultWhite: styles.defaultWhite,
  defaultBlack: styles.defaultBlack,
  outlinedWhite: styles.outlinedWhite,
  outlinedBlack: styles.outlinedBlack,
}

const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary,
}

const SIZES = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
}

const Button = ({
  className,
  type,
  mode,
  variant,
  size,
  children,
  ...restProps
}: {
  className: any
  type: 'submit' | 'reset' | 'button' | undefined
  size: string
  mode: string
  variant: string
  children?: any
}) => (
  <button
    {...restProps}
    type={type}
    className={cn(MODES[mode], VARIANTS[variant], SIZES[size], className)}
  >
    {children}
  </button>
)

export default Button
