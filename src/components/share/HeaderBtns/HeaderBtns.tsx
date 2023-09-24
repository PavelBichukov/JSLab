import { useState } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import styles from './HeaderBtns.module.scss'
import { Input } from '../index'
import Modals from '../Modal/Modals'
import { Typography } from '../Typography'

const HeaderBtns = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [values, setValues] = useState({
    email: '' as string,
    password: '' as string,
  })

  function closeModal() {
    setIsOpen(false)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.btnContainer}>
      <button className={styles.loginButton} onClick={() => setIsOpen(true)}>
        Log in
      </button>
      <Link to="/signup">
        <button className={styles.signupButton}>Sign up</button>
      </Link>
      <Modals
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      >
        <form>
          <Link to="/" className={styles.closeText} onClick={closeModal}>
            &lt; Back
          </Link>
          <Typography variant="Header2XL" className={styles.formTitle}>
            Register
          </Typography>
          <Input variant="email" id="email" label="Email" onChange={onChange} />
          <Input
            variant="password"
            id="password"
            label="Password"
            onChange={onChange}
          />
          <button className={styles.buttonLogin}>Submit</button>
        </form>
        <div>
          <Typography variant="Header2XL" className={styles.createText}>
            Created with ❤️ in <span className={styles.spanText}>&nbsp;i</span>
            Tech
            <span className={styles.spanText}>Art</span>
          </Typography>
        </div>
      </Modals>
    </div>
  )
}
export default HeaderBtns
