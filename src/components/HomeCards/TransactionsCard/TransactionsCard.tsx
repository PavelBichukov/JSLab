import { HomeCard, LineChart, Typography } from 'components/share'

import styles from './TransactionsCard.module.scss'

export const TransactionsCard = () => {
  return (
    <HomeCard variant="primary">
      <div className={styles.headerContainer}>
        <Typography variant="LabelL">Transactions</Typography>
        <img src="src/assets/icons/externalLink.png" alt="external link" />
      </div>
      <div className={styles.subHeaderContainer}>
        <Typography variant="LabelM" className={styles.subHeaderSelected}>
          This week
        </Typography>
        <Typography variant="LabelM">This Month</Typography>
        <Typography variant="LabelM">This Year</Typography>
      </div>
      <LineChart />
      <Typography variant="HeaderXL" className={styles.header}>
        812
      </Typography>
      <div className={styles.footerContainer}>
        <div>
          <img src="src/assets/icons/GreenTriangle.png" alt="triangle" />
        </div>
        <Typography variant="LabelXL" className={styles.number}>
          93
        </Typography>
        <Typography variant="ParagraphL" className={styles.nextPayment}>
          Week over week
        </Typography>
      </div>
    </HomeCard>
  )
}

export default TransactionsCard
