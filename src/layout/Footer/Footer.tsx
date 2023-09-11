import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab.jsx'
import Logo from 'assets/icons/Logo.jsx'
import { Typography } from 'components/share/Typography'
import AppStoreImg from 'src/assets/images/AppStore.png'
import PlayMarkerImg from 'src/assets/images/GooglePlay.png'

import { labels as LABELS, socialNetworks as LOGOS } from './Footer.constants'
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
    <div className={styles.footPartFooter}>
      <div className={styles.footerIcons}>
        {LOGOS.map((logo) => (
          <a key={logo.imgSrc} href={logo.href} target="_blank">
            <div>
              <img src={logo.imgSrc} alt={logo.imgSrc} />
            </div>
          </a>
        ))}
      </div>
      <div className={styles.footerLastText}>
        {LABELS.map((label) => (
          <Link key={label} to="/">
            <Typography variant="LabelS">{label}</Typography>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default Footer
