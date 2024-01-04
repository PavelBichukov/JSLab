import { HomeCard, LineChart, Typography } from 'components/share'
import imgLink from 'src/assets/icons/externalLink.png'
import imgTriangle from 'src/assets/icons/GreenTriangle.png'

import { transactionData } from './TransactionCard.consts'
import styles from './TransactionsCard.module.scss'

export const TransactionsCard = () => {
  return (
    <HomeCard variant="primary">
      <div className={styles.headerContainer}>
        <Typography variant="LabelL" className={styles.transactionTypo}>
          Transactions
        </Typography>
        <img src={imgLink} alt="external link" />
      </div>
      <div className={styles.subHeaderContainer}>
        <Typography variant="LabelM" className={styles.subHeaderSelected}>
          This week
        </Typography>
        <Typography variant="LabelM">This Month</Typography>
        <Typography variant="LabelM">This Year</Typography>
      </div>
      <LineChart dataSet={transactionData} minScale={0} maxScale={600} />
      <Typography variant="HeaderXL" className={styles.header}>
        812
      </Typography>
      <div className={styles.footerContainer}>
        <div>
          <img src={imgTriangle} alt="triangle" />
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
