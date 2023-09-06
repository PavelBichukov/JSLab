import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'
import { ReactComponent as Jslab } from '../../assets/icons/Jslab.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <div className={styles.logo}>
          <Logo />
          <Jslab className={styles.logoName} />
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
