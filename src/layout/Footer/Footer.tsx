import Jslab from 'assets/icons/Jslab.jsx'
import Logo from 'assets/icons/Logo.jsx'
import AppStoreImg from 'src/assets/images/AppStore.png'
import PlayMarkerImg from 'src/assets/images/GooglePlay.png'

import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.mainFooter}>
    <div>
      <div>
        <Logo color="#14151A" />
        <Jslab color="#14151A" className={styles.logoName} />
      </div>
      <div>
        <img src={AppStoreImg} alt="App Store" />
        <img src={PlayMarkerImg} alt="Google Play" />
      </div>
    </div>
    <div></div>
  </div>
)

export default Footer
