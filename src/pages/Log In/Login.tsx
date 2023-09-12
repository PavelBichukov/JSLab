import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import FormInput from 'components/share/FormInput/FormInput'
import { Typography } from 'components/share/Typography'

import styles from './Login.module.scss'

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
          <Typography variant="Header2XL" className={styles.formTitle}>
            Register
          </Typography>
          <Link to="/">
            <AiOutlineCloseCircle />
          </Link>
        </div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
