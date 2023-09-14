import { ReactComponent as SuccessIcon } from 'assets/icons/SuccessIcon.svg'
import { Typography } from 'components/share/Typography'

import styles from './successBlock.module.scss'

export const SuccessBlock = () => {
  return (
    <div className={styles.successBlock}>
      <SuccessIcon />
      <Typography variant="HeaderM"> Success</Typography>
    </div>
  )
}

export default SuccessBlock
