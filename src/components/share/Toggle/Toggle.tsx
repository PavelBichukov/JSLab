import cn from 'classnames'
import { useState } from 'react'

import styles from './Toggle.module.scss'

const Toggle = ({
  className,
  online,
  name,
  toggleState,
  ...restProps
}: {
  className?: any
  online: boolean
  name: string
  toggleState: any
}) => {
  const [checked, setChecked] = useState(online)
  const clickHandler = () => {
    setChecked(!checked)

    console.log(`click ${name}`)
  }
  const changeHandler = () => {
    toggleState(name)
  }
  return (
    <div>
      <label className={cn(styles.switch, className)} {...restProps}>
        <input
          type="checkbox"
          checked={online}
          onClick={clickHandler}
          value={checked}
          onChange={changeHandler}
        />
        <span className={cn(styles.slider, styles.round)}></span>
      </label>
    </div>
  )
}

export default Toggle
