import { MouseEventHandler } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from 'components/share/Typography'

import styles from './Login.module.scss'

const Login = ({
  onClose,
}: {
  onClose: MouseEventHandler<HTMLAnchorElement> | undefined
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalStyles}>
        <form onSubmit={handleSubmit}>
          <Link to="/" className={styles.closeText} onClick={onClose}>
            &lt; Back
          </Link>
          <Typography variant="Header2XL" className={styles.formTitle}>
            Register
          </Typography>
          {/*{INPUTS.map((input) => (*/}
          {/*  <FormInput key={input.id} {...input} onChange={onChange} />*/}
          {/*))}*/}
          <button className={styles.buttonLogin}>Submit</button>
        </form>
        <div>
          <Typography variant="Header2XL" className={styles.createText}>
            Created with ❤️ in <span className={styles.spanText}>&nbsp;i</span>
            Tech
            <span className={styles.spanText}>Art</span>
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default Login
