import cn from 'classnames'
import { useState } from 'react'

import styles from './Toggle.module.scss'

const Toggle = ({
  className,
  online,
  ...restProps
}: {
  className?: any
  online: boolean
}) => {
  const [checked, setChecked] = useState(online)
  const clickHandler = () => {
    setChecked(!checked)
  }

  return (
    <label className={cn(styles.switch, className)}>
      <input
        type="checkbox"
        checked={online}
        onClick={clickHandler}
        {...restProps}
      />
      <span className={cn(styles.slider, styles.round)}></span>
    </label>
  )
}

export default Toggle
