import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab'
import Logo from 'assets/icons/Logo'
import AppStoreImg from 'assets/images/AppStore.png'
import PlayMarkerImg from 'assets/images/GooglePlay.png'
import { Typography } from 'components/share'

import { labels as LABELS, socialNetworks as LOGOS } from './Footer.constants'
import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.mainFooter}>
    <div className={styles.headPartFooter}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo color="#14151A" />
        </Link>
        <Link to="/">
          <div className={styles.logoName}>
            <Jslab color="#14151A" />
          </div>
        </Link>
      </div>
      <div className={styles.platforms}>
        <a
          href="https://www.apple.com/by/app-store/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={AppStoreImg} alt="App Store" />
        </a>
        <a
          href="https://play.google.com/store/games"
          target="_blank"
          rel="noreferrer"
        >
          <img src={PlayMarkerImg} alt="Google Play" />
        </a>
      </div>
    </div>
    <hr className={styles.hrStyle} />
    <div className={styles.footPartFooter}>
      <div className={styles.footerIcons}>
        {LOGOS.map((logo) => (
          <a
            key={logo.imgSrc}
            href={logo.href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo.imgSrc} alt={logo.imgSrc} />
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
