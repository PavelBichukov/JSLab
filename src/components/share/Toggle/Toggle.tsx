import cn from 'classnames'

import styles from './Toggle.module.scss'

const Toggle = ({
  className,
  online,
  stationName,
  toggleStationHandler,
  ...restProps
}: {
  className?: any
  online: boolean
  stationName: any
  toggleStationHandler: any
}) => {
  const clickHandler = () => {
    toggleStationHandler(stationName)
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
