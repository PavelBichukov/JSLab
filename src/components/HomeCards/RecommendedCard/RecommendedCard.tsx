import { HomeCard, Typography } from 'components/share'

import { parameters } from './RecommendedCard.constants'
import styles from './RecommendedCard.module.scss'

export const RecommendedCard = () => (
  <HomeCard variant="primary">
    <Typography variant="LabelL">Recommended Price</Typography>
    <div className={styles.container}>
      <Typography variant="HeaderL">$3.018</Typography>
      <Typography variant="ParagraphL" className={styles.paragraph}>
        / gallon
      </Typography>
    </div>
    <div className={styles.containerParameters}>
      {parameters.map((parameter) => (
        <div key={parameter.value} className={styles.containerItem}>
          <Typography variant="ParagraphL" className={styles.parameter}>
            {parameter.value}
          </Typography>
          <Typography variant="HeaderXS">{parameter.price}</Typography>
        </div>
      ))}
    </div>
    <div className={styles.subContainerItem}>
      <Typography variant="ParagraphL" className={styles.parameter}>
        Profit
      </Typography>
      <Typography variant="HeaderXS">$0.06</Typography>
    </div>
  </HomeCard>
)

export default RecommendedCard
