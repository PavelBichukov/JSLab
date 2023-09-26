import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Jslab from 'assets/icons/Jslab'
import Logo from 'assets/icons/Logo'
import Button from 'components/share/Button/Button'
import { HeaderBtns, Input } from 'components/share/index'
import Modals from 'components/share/Modal/Modals'
import { Typography } from 'components/share/Typography'

import styles from './Header.module.scss'

const Header = () => {
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
            onClick={() => console.log('clicked')}
          >
            Sign up
          </Button>
        </Link>
        <Modals isOpen={modalIsOpen} closeModal={closeModal}>
          <form>
            <Link to="/" onClick={closeModal}>
              <button className={styles.backButton}>Back</button>
            </Link>
            <Typography variant="Header2XL" className={styles.formTitle}>
              Register
            </Typography>
            <Input
              variant="email"
              id="email"
              label="Email"
              onChange={onChange}
            />
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
              onClick={() => console.log('clicked')}
            >
              Submit
            </Button>
          </form>
          <div>
            <Typography variant="Header2XL" className={styles.createText}>
              Created with ❤️ in{' '}
              <span className={styles.spanText}>&nbsp;i</span>
              Tech
              <span className={styles.spanText}>Art</span>
            </Typography>
          </div>
        </Modals>
      </div>
    </div>
  )
}
export default Header
