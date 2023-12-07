import { ReactComponent as CheckCircle } from 'assets/icons/check-circle.svg'
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg'
import { Typography } from 'components/share'

import styles from './BankingInformation.module.scss'
import { TabContainer } from '../../Tabs'

const BankingInformation = () => {
  return (
    <TabContainer tittle="Banking Information">
      <div className={styles.main}>
        <div className={styles.infoColumn}>
          <Typography className={styles.infoTittle} variant="ParagraphS">
            Bank Nickname
          </Typography>
          <Typography className={styles.infoText} variant="ParagraphL">
            Chase Bank
          </Typography>
        </div>
        <div className={styles.infoColumn}>
          <Typography className={styles.infoTittle} variant="ParagraphS">
            Account Type
          </Typography>
          <Typography className={styles.infoText} variant="ParagraphL">
            Checking
          </Typography>
        </div>
        <div className={styles.infoColumn}>
          <Typography className={styles.infoTittle} variant="ParagraphS">
            Account Number
          </Typography>
          <Typography className={styles.infoText} variant="ParagraphL">
            *****5555
          </Typography>
        </div>
        <div className={styles.status}>
          <div className={styles.statusBox}>
            <CheckCircle />
            <Typography className={styles.statusText} variant="LabelM">
              Verified
            </Typography>
          </div>
          <div className={styles.statusBox}>
            <TrashIcon />
            <Typography className={styles.removeText} variant="ParagraphS">
              Remove account
            </Typography>
          </div>
        </div>
      </div>
      <Typography className={styles.addAccount} variant="ParagraphS">
        Add an account
      </Typography>
    </TabContainer>
  )
}

export default BankingInformation
