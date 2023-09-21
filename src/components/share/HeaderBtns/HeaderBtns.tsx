import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

import Modal from 'components/share/modal/Modal'

import styles from './HeaderBtns.module.scss'

const HeaderBtns = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.btnContainer}>
      {/*<Link to="/login">*/}
      <button className={styles.loginButton} onClick={() => setShowModal(true)}>
        Log in
      </button>
      {/*</Link>*/}
      <Link to="/signup">
        <button className={styles.signupButton}>Sign up</button>
      </Link>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  )
}
export default HeaderBtns
