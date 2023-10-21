import cn from 'classnames'

import { Typography } from 'components/share'

import styles from './Radio.module.scss'

const Radio = ({
  labelText,
  subText,
  ...restProps
}: {
  labelText: string
  subText: string
}) => {
  return (
    <div>
      <label className={styles.container} {...restProps}>
        <div>
          <Typography variant="LabelL" className={styles.textStyle}>
            {labelText}
          </Typography>
          <Typography variant="ParagraphM" className={styles.subTextStyle}>
            {subText}
          </Typography>
        </div>
        <input type="radio" name="radio" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  )
}

export default Radio
