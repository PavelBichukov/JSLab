import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab.jsx'
import Logo from 'assets/icons/Logo.jsx'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <div className={styles.logo}>
          <Logo color="#FFFFFF" />
          <Jslab color="#FFFFFF" className={styles.logoName} />
        </div>
      </Link>

      <div className={styles.buttons}>
        <Link to="/login">
          <button className={styles.loginButton}>Log in</button>
        </Link>
        <Link to="/signup">
          <button className={styles.signupButton}>Sign up</button>
        </Link>
      </div>
    </div>
  )
}
export default Header
