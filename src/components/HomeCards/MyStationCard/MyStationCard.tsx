import { HomeCard, Typography } from 'components/share'

import styles from './MyStationCard.module.scss'

export const MyStationCard = () => {
  return (
    <HomeCard variant="primary">
      <div className={styles.myStationTitle}>
        <Typography variant="LabelL" className={styles.myStationTypo}>
          My Station
        </Typography>
        <Typography variant="LabelM" className={styles.changeTypo}>
          Change
        </Typography>
      </div>
      <img
        src="src/assets/images/station.png"
        alt="stationPhoto"
        height="154"
      />
      <Typography variant="HeaderS" className={styles.shellTypo}>
        Shell
      </Typography>
      <Typography variant="ParagraphL">3128 McKinney Ave</Typography>
      <Typography variant="ParagraphL">Dallas, TX 75204-2465</Typography>
      <div className={styles.containerTypo}>
        <div>
          <Typography variant="ParagraphS" className={styles.paragraphTypo}>
            Store ID
          </Typography>
          <Typography variant="ParagraphL">1537-2713</Typography>
        </div>
        <div>
          <Typography variant="ParagraphS" className={styles.paragraphTypo}>
            Merchant ID
          </Typography>
          <Typography variant="ParagraphL">1537-2713</Typography>
        </div>
      </div>
    </HomeCard>
  )
}

export default MyStationCard
