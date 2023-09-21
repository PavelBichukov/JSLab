import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

import { Login } from 'src/pages'

import styles from './HeaderBtns.module.scss'

const HeaderBtns = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.btnContainer}>
      <button className={styles.loginButton} onClick={() => setShowModal(true)}>
        Log in
      </button>
      <Link to="/signup">
        <button className={styles.signupButton}>Sign up</button>
      </Link>
      {showModal &&
        createPortal(
          <Login onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  )
}
export default HeaderBtns
