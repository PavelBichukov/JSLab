import cn from 'classnames'

import styles from './HomeCard.module.scss'

const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary,
}

const HomeCard = ({
  children,
  variant,
  className,
}: {
  children: any
  variant: string
  className?: any
}) => {
  return (
    <div className={cn((VARIANTS as any)[variant]!, className)}>{children}</div>
  )
}

export default HomeCard
