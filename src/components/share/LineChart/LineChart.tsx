import { defaults } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

import { transactionData } from 'components/HomeCards/TransactionsCard/TransactionCard.consts'

import styles from './LineChart.module.scss'

const LineChart = () => {
  const data = {
    labels: transactionData.map((data) => data.label),
    datasets: [
      {
        data: transactionData.map((data) => data.revenue),
        backgroundColor: '#4CC3FF',
        borderColor: '#4CC3FF',
      },
    ],
  }
  defaults.responsive = true
  defaults.plugins.legend.display = false
  defaults.scale.suggestedMin = 0
  defaults.scale.suggestedMax = 600

  return <Line data={data} className={styles.main} />
}

export default LineChart
