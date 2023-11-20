import { HomeCard, Typography } from 'components/share'

import styles from './CurrentOfferCard.module.scss'

export const CurrentOfferCard = () => (
  <HomeCard variant="primary" className={styles.card}>
    <div className={styles.titleBox}>
      <Typography variant="LabelL" className={styles.cardTitle}>
        Current Offer
      </Typography>
      <Typography variant="LabelM" className={styles.change}>
        Change
      </Typography>
    </div>
    <img src="src/assets/images/coffee.png" alt="coffeePhoto" />
    <Typography variant="HeaderM" className={styles.textTitle}>
      Free Coffee
    </Typography>
    <Typography variant="ParagraphM" className={styles.cardText}>
      Earn up to a 32oz free coffee with a purchase of $20 in fuel. Offer
      expires within 7 days of purchase.
    </Typography>
  </HomeCard>
)

export default CurrentOfferCard
