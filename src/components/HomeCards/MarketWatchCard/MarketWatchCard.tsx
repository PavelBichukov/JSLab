import cn from 'classnames'

import { HomeCard, LineChart, Typography } from 'components/share'

import { chartPeriods, marketWatchData } from './MarketWatchCard.constants'
import styles from './MarketWatchCard.module.scss'

export const MarketWatchCard = () => (
  <HomeCard variant="primary">
    <Typography variant="LabelL" className={styles.title}>
      Market Watch
    </Typography>
    <div className={styles.chartPeriods}>
      {chartPeriods.map((period) => (
        <Typography
          variant="LabelM"
          className={cn(styles.chartPeriod, {
            [styles.active]: period.isActive,
          })}
          key={period.key}
        >
          {period.text}
        </Typography>
      ))}
    </div>
    <LineChart
      dataSet={marketWatchData}
      symbol={'$'}
      minScale={76}
      maxScale={79}
      baseline={true}
    />
    <Typography variant="HeaderXL" className={styles.currentPrice}>
      $76.25
    </Typography>
    <div className={styles.pricesChangingBox}>
      <Typography variant="HeaderXS" className={styles.priceValueChange}>
        -1.33
      </Typography>
      <Typography variant="HeaderXS" className={styles.priceValueChange}>
        -1.71%
      </Typography>
    </div>
    <Typography variant="ParagraphM" className={styles.bottomText}>
      Last updated: Mar 8, 2023 at 10:58 AM EST
    </Typography>
  </HomeCard>
)

export default MarketWatchCard
