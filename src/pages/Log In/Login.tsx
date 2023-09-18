import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import FormInput from 'components/share/FormInput/FormInput'
import { Typography } from 'components/share/Typography'

import { inputs as INPUTS } from './Login.constants'
import styles from './Login.module.scss'
import * as React from 'react'

const Login = () => {
  const [values, setValues] = useState({
    email: '' as string,
    password: '' as string,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.app}>
      <div className={styles.mainForm}>
        <form onSubmit={handleSubmit}>
          <Link to="/" className={styles.closeIcon}>
            <AiOutlineCloseCircle />
          </Link>
          <Typography variant="Header2XL" className={styles.formTitle}>
            Register
          </Typography>
          {INPUTS.map((input) => (
            <FormInput key={input.id} {...input} onChange={onChange} />
          ))}
          <button className={styles.buttonLogin}>Submit</button>
        </form>
      </div>
      <div>
        <Typography variant="Header2XL" className={styles.createText}>
          Created with ❤️ in <span className={styles.spanText}>&nbsp;i</span>
          Tech
          <span className={styles.spanText}>Art</span>
        </Typography>
      </div>
    </div>
  )
}

export default Login
