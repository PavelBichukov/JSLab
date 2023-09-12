import { Banner, Footer, Header, Rates, Team } from 'src/layout/index'

import styles from './Landing.module.scss'

const Landing = () => (
  <div>
    <Header />
    <div>
      <Banner />
      <div className={styles.bannerMission}>
        <p className={styles.bannerMissionText}>
          <span className={styles.bannerMissionSmart}>Our Mission</span> is to
          transform the way fuel is delivered to everything in the world.
        </p>
      </div>
    </div>
    <Team />
    <div id="rates">
      <Rates />
    </div>
    <Footer />
  </div>
)

export default Landing
