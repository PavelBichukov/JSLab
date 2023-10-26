import cn from 'classnames'
import { MouseEventHandler } from 'react'

import styles from './Button.module.scss'

const MODES = {
  defaultWhite: styles.defaultWhite,
  defaultBlack: styles.defaultBlack,
  outlinedWhite: styles.outlinedWhite,
  outlinedBlack: styles.outlinedBlack,
  whiteShadow: styles.whiteShadow,
  whiteShadowDisabled: styles.whiteShadowDisabled,
  disabled: styles.disabled,
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
  onClick,
  ...restProps
}: {
  className: any
  type: 'submit' | 'reset' | 'button' | undefined
  size: string
  mode: string
  variant: string
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  children?: any
}) => (
  <button
    {...restProps}
    type={type}
    onClick={onClick}
    className={cn(
      (MODES as any)[mode]!,
      (VARIANTS as any)[variant]!,
      (SIZES as any)[size]!,
      className
    )}
  >
    {children}
  </button>
)

export default Button
