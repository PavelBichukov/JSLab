import cn from 'classnames'

import { ITypography, ITypographyProps } from './Typography.types'

import styles from './Typography.module.scss'

const variants: ITypography = {
  Header3XL: styles.Header3XL,
  Header2XL: styles.Header2XL,
  HeaderXL: styles.HeaderXL,
  HeaderL: styles.HeaderL,
  HeaderM: styles.HeaderM,
  HeaderS: styles.HeaderS,
  HeaderXS: styles.HeaderXS,
  ParagraphXL: styles.ParagraphXL,
  ParagraphL: styles.ParagraphL,
  ParagraphM: styles.ParagraphM,
  ParagraphS: styles.ParagraphS,
  ParagraphXS: styles.ParagraphXS,
}

const components: ITypography = {
  Header3XL: 'h1',
  Header2XL: 'h2',
  HeaderXL: 'h3',
  HeaderL: 'h4',
  HeaderM: 'h5',
  HeaderS: 'h6',
  HeaderXS: 'h6',
  ParagraphXL: 'p',
  ParagraphL: 'p',
  ParagraphM: 'p',
  ParagraphS: 'p',
  ParagraphXS: 'p',
}

const Typography = ({
  variant,
  children,
  className,
  component,
  ...restProps
}: ITypographyProps) => {
  const Component: any = component || components[variant as keyof ITypography]
  return (
    <Component
      {...restProps}
      className={cn(variants[variant as keyof ITypography], className)}
    >
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  variant: 'ParagraphM',
}

export default Typography
