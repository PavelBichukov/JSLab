import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab.jsx'
import Logo from 'assets/icons/Logo.jsx'
import AppStoreImg from 'src/assets/images/AppStore.png'
import PlayMarkerImg from 'src/assets/images/GooglePlay.png'

import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.mainFooter}>
    <div className={styles.headPartFooter}>
      <div className={styles.logo}>
        <Link to="/">
          <div>
            <Logo color="#14151A" />
          </div>
        </Link>
        <Link to="/">
          <div className={styles.logoName}>
            <Jslab color="#14151A" />
          </div>
        </Link>
      </div>
      <div className={styles.platforms}>
        <a href="https://www.apple.com/by/app-store/" target="_blank">
          <div>
            <img src={AppStoreImg} alt="App Store" />
          </div>
        </a>
        <a href="https://play.google.com/store/games" target="_blank">
          <div>
            <img src={PlayMarkerImg} alt="Google Play" />
          </div>
        </a>
      </div>
    </div>
    <hr className={styles.hrStyle} />
    <div></div>
  </div>
)

export default Footer
