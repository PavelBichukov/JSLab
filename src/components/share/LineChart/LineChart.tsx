import { Chart, defaults } from 'chart.js/auto'
import annotationPlugin from 'chartjs-plugin-annotation'
import { Line } from 'react-chartjs-2'

Chart.register(annotationPlugin)

import styles from './LineChart.module.scss'
import { IData } from './LineChartData.types'

const LineChart = ({
  dataSet,
  symbol,
  minScale,
  maxScale,
  baseline,
}: IData) => {
  const annotation = {
    type: 'line',
    borderColor: '#FF3B30',
    borderWidth: 0,
    scaleID: 'y',
    value: 77.5,
  }

  baseline ? (annotation.borderWidth = 1) : 0

  const data = {
    labels: dataSet?.map((data) => data.label),
    datasets: [
      {
        data: dataSet?.map((data) => data.revenue),
        backgroundColor: '#4CC3FF',
        borderColor: '#4CC3FF',
      },
    ],
  }
  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value: number) {
            if (symbol) {
              return symbol + value
            } else {
              return value
            }
          },
        },
        position: 'right',
      },
    },
    plugins: {
      annotation: {
        annotations: {
          annotation,
        },
      },
    },
  } as any
  defaults.responsive = true
  defaults.plugins.legend.display = false
  defaults.scale.suggestedMin = minScale
  defaults.scale.suggestedMax = maxScale

  return <Line data={data} options={options} className={styles.main} />
}

export default LineChart
