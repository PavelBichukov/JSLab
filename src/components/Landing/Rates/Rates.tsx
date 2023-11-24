import { RateCard } from 'components/share'

import { rates as RATES } from './Rates.constants'
import styles from './Rates.module.scss'

const Rates = () => (
  <div className={styles.mainRates}>
    <p className={styles.ratesTitle}>Start by selecting how you’ll use JSLab</p>
    <div className={styles.ratesCards}>
      {RATES.map((rate) => (
        <RateCard
          key={rate.title}
          title={rate.title}
          description={rate.description}
          options={rate.options}
        />
      ))}
    </div>
  </div>
)

export default Rates
