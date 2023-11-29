import { HomeCard } from 'components/share'

import { overviewConstants } from './SelectedStationOverview.constants'
import styles from './SelectedStationOverview.module.scss'

const SelectedStationOverview = () => {
  return (
    <div className={styles.cardsContainer}>
      {overviewConstants.map((card) => (
        <HomeCard className={styles.card} variant="primary" key={card.id}>
          {}
        </HomeCard>
      ))}
    </div>
  )
}

export default SelectedStationOverview
