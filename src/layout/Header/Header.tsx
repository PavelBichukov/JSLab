import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab'
import Logo from 'assets/icons/Logo'
import Button from 'components/share/Button/Button'

import styles from './Header.module.scss'

const Header = () => (
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
      <Link to="/login">
        <Button
          className={styles.loginButton}
          type="button"
          size="small"
          mode="outlinedBlack"
          variant="primary"
          onClick={() => console.log('clicked')}
        >
          Log in
        </Button>
      </Link>
      <Link to="/signup">
        <Button
          className={styles.signupButton}
          type="button"
          size="small"
          mode="defaultWhite"
          variant="primary"
          onClick={() => console.log('clicked')}
        >
          Sign up
        </Button>
      </Link>
    </div>
  </div>
)
export default Header
