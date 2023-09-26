import cn from 'classnames'

import styles from './/Checkbox.module.scss'
import { ICheckboxProps } from './Chekbox.types'

const Checkbox = ({ id, hasError, ...restProps }: ICheckboxProps) => {
  return (
    <input
      {...restProps}
      className={cn(styles.input, {
        [styles.inputError]: hasError,
      })}
      type="checkbox"
      id={id}
    />
  )
}

export default Checkbox
