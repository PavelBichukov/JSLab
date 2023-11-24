import { HomeCard, Typography } from 'components/share'
import imgTriangle from 'src/assets/icons/GreenTriangle.png'

import styles from './AverageCard.module.scss'

export const AverageCard = () => (
  <div>
    <HomeCard variant="secondary" className={styles.firstCard}>
      <Typography variant="LabelL" className={styles.localTypo}>
        Local Average
      </Typography>
      <div className={styles.container}>
        <div className={styles.triangle}>
          <img src={imgTriangle} alt="triangle" />
        </div>
        <Typography variant="HeaderL">$3.018</Typography>
        <Typography variant="ParagraphL" className={styles.paragraph}>
          / gallon
        </Typography>
      </div>
      <div className={styles.subContainer}>
        <Typography variant="ParagraphL">$2.974</Typography>
        <Typography variant="ParagraphS" className={styles.subParagraph}>
          yesterday
        </Typography>
      </div>
    </HomeCard>
    <HomeCard variant="secondary">
      <Typography variant="LabelL" className={styles.localTypo}>
        National Average
      </Typography>
      <div className={styles.container}>
        <div className={styles.triangle}>
          <img src={imgTriangle} alt="triangle" />
        </div>
        <Typography variant="HeaderL">$3.446</Typography>
        <Typography variant="ParagraphL" className={styles.paragraph}>
          / gallon
        </Typography>
      </div>
      <div className={styles.subContainer}>
        <Typography variant="ParagraphL">$3.446</Typography>
        <Typography variant="ParagraphS" className={styles.subParagraph}>
          yesterday
        </Typography>
      </div>
    </HomeCard>
  </div>
)

export default AverageCard
