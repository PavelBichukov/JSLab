import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab'
import Logo from 'assets/icons/Logo'
import { HeaderBtns } from 'components/share/index'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <div className={styles.logo}>
          <Logo color="#FFFFFF" />
          <div className={styles.logoName}>
            <Jslab color="#FFFFFF" />
          </div>
        </div>
      </Link>
      <div className={styles.buttons}>
        <HeaderBtns />
      </div>
    </div>
  )
}
export default Header
