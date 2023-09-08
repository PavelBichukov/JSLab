import Header from 'src/layout/Header/Header'
import Banner from 'src/layout/Banner/Banner'
import Team from 'src/layout/Team/Team'
import styles from './Landing.module.scss'
import Rates from 'src/layout/Rates/Rates'

const Landing = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
        <div className={styles.bannerMission}>
          <p className={styles.bannerMissionText}>
            <span className={styles.bannerMissionSmart}>Our Mission</span> is to
            transform the way fuel is delivered to everything in the world.
          </p>
        </div>
      </div>
      <div>
        <Team />
      </div>
      <div id="rates">
        <Rates />
      </div>
    </div>
  )
}
export default Landing
