import Rate from 'components/share/RateCard/Rate'

import { rates as RATES } from './Rates.constants'
import styles from './Rates.module.scss'

const Rates = () => {
  return (
    <div className={styles.mainRates}>
      <p className={styles.ratesTitle}>
        Start by selecting how you’ll use JSLab
      </p>
      <div className={styles.ratesCards}>
        {RATES.map((rate) => (
          <Rate
            key={rate.title}
            title={rate.title}
            description={rate.description}
            options={rate.options}
          />
        ))}
      </div>
    </div>
  )
}
export default Rates
