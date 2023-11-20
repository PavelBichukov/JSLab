import { HomeCard, Typography } from 'components/share'

import styles from './PaymentsCard.module.scss'

export const PaymentsCard = () => (
  <HomeCard variant="primary">
    <div className={styles.headerLine}>
      <Typography variant="LabelL" className={styles.paymentsTypo}>
        Payments
      </Typography>
      <img src="src/assets/icons/externalLink.png" alt="external link" />
    </div>
    <div className={styles.textContainer}>
      <Typography variant="HeaderXL" className={styles.headerPrice}>
        $82,012.16
      </Typography>
      <Typography variant="ParagraphL" className={styles.deposited}>
        Deposited Wed, Mar 1, 2023 at 9:08 AM
      </Typography>
      <Typography variant="ParagraphL" className={styles.nextPayment}>
        Next payment scheduled for Mar 8, 2023
      </Typography>
    </div>
  </HomeCard>
)

export default PaymentsCard
