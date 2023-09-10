import { Banner, Header, Rates, Team } from 'src/layout/index'

import styles from './Landing.module.scss'

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
