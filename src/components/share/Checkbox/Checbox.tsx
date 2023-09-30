import cn from 'classnames'

import styles from './/Checkbox.module.scss'
import { ICheckboxProps } from './Chekbox.types'

const Checkbox = ({
  id,
  hasError,
  className,
  ...restProps
}: ICheckboxProps) => {
  return (
    <input
      {...restProps}
      className={cn(
        styles.input,
        {
          [styles.inputError]: hasError,
        },
        className
      )}
      type="checkbox"
      id={id}
    />
  )
}

export default Checkbox
