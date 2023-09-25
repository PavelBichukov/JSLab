import { useState } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/share/Button/Button'

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
      <Button
        className={styles.loginButton}
        type="button"
        size="small"
        mode="outlinedBlack"
        variant="primary"
        onClick={() => setIsOpen(true)}
      >
        Log in
      </Button>
      <Link to="/signup">
        <Button
          className={styles.signupButton}
          type="button"
          size="small"
          mode="defaultWhite"
          variant="primary"
        >
          Sign up
        </Button>
      </Link>
      <Modals isOpen={modalIsOpen} closeModal={closeModal}>
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
          <Button
            className={styles.buttonLogin}
            type="button"
            size="large"
            mode="defaultBlack"
            variant="secondary"
          >
            Submit
          </Button>
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
