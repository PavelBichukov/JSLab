import cn from 'classnames'

import styles from './Button.module.scss'

const MODES = {
  default: styles.defaultMode,
  outlinedWhite: styles.outlinedModeWhite,
  outlinedBlack: styles.outlinedModeBlack,
}

const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary,
}

const SIZES = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
}

const COLORS = {
  white: styles.whiteColor,
  black: styles.blackColor,
}

const Button = ({
  className,
  type,
  size,
  color,
  mode,
  variant,
  children,
  ...restProps
}: {
  className: any
  type: string
  size: string
  color: string
  mode: string
  variant: string
  children?: any
}) => (
  <button
    {...restProps}
    type={type}
    className={cn(
      MODES[mode],
      VARIANTS[variant],
      SIZES[size],
      COLORS[color],
      className
    )}
  >
    {children}
  </button>
)

export default Button
