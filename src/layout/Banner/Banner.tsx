import Button from 'components/share/Button/Button'
import { Typography } from 'components/share/Typography'

import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.pattern}></div>
      <div className={styles.mainText}>
        <Typography variant="Header3XL" className={styles.patternText}>
          Providing Businesses and Individuals an
          <span className={styles.smartText}> Smart</span> way to
          <span className={styles.smartText}> Save</span>,
          <span className={styles.smartText}> Pay</span> &
          <span className={styles.smartText}> Invest</span> in
          <span className={styles.smartText}> Energy</span>.
        </Typography>
      </div>
      <div className={styles.buttonContainer}>
        <a href="#rates">
          <Button
            className={styles.bannerButton}
            type="button"
            size="large"
            mode="defaultWhite"
            variant="secondary"
            onClick={() => console.log('clicked')}
          >
            Get started today
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Banner
