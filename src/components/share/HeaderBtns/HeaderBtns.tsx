import { Link } from 'react-router-dom'

import styles from './HeaderBtns.module.scss'

const HeaderBtns = () => (
  <div className={styles.btnContainer}>
    <Link to="/login">
      <button className={styles.loginButton}>Log in</button>
    </Link>
    <Link to="/signup">
      <button className={styles.signupButton}>Sign up</button>
    </Link>
  </div>
)
export default HeaderBtns
