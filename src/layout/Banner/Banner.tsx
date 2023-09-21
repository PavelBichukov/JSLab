import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.pattern}></div>
      <div className={styles.mainText}>
        <p className={styles.patternText}>
          Providing Businesses and Individuals an
          <span className={styles.smartText}> Smart</span> way to
          <span className={styles.smartText}> Save</span>,
          <span className={styles.smartText}> Pay</span> &
          <span className={styles.smartText}> Invest</span> in
          <span className={styles.smartText}> Energy</span>.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <a href="#rates">
          <button className={styles.bannerButton}>Get started today</button>
        </a>
      </div>
    </div>
  )
}

export default Banner
