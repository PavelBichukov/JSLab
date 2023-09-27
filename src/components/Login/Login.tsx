import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { FormController, Input } from 'components/share'
import { Typography } from 'components/share/Typography'

import styles from './Login.module.scss'
import Button from '../share/Button/Button'

const Login = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  })
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.headerButtons}>
        <Link to="/login">
          <Button
            className={styles.buttonLogin}
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
            className={styles.buttonSignUp}
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
      <div className={styles.contentContainer}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Link to="/">
            <button className={styles.backButton}>Back</button>
          </Link>
          <Typography variant="Header2XL" className={styles.formTitle}>
            Register
          </Typography>
          <div className={styles.controllerContainer}>
            <FormController
              name="email"
              control={control}
              rules={{
                required: 'Field is required!',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Invalid email address!',
                },
              }}
              render={({ field }: any) => (
                <Input
                  {...field}
                  ref={null}
                  variant="email"
                  label="Your email address"
                  id="email"
                />
              )}
            />
            <FormController
              name="password"
              control={control}
              errorClassName={styles.passwordError}
              rules={{
                required: 'Field is required!',
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    'Password must contain: a lower case letter, a upper case letter, a number, minimum 6 characters',
                },
              }}
              render={({ field }: any) => (
                <Input
                  {...field}
                  ref={null}
                  variant="password"
                  label="Password"
                  id="password"
                />
              )}
            />
            <div className={styles.centerButton}>
              {isValid ? (
                <Button
                  className={styles.buttonEnter}
                  type="submit"
                  size="large"
                  mode="defaultBlack"
                  variant="secondary"
                  onClick={() => console.log('clicked')}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  className={styles.buttonEnter}
                  type="submit"
                  size="large"
                  mode="disabled"
                  variant="secondary"
                  onClick={() => console.log('clicked')}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
          <div>
            <Typography variant="Header2XL" className={styles.createText}>
              Created with ❤️ in<span className={styles.spanText}>&nbsp;i</span>
              Tech
              <span className={styles.spanText}>Art</span>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
