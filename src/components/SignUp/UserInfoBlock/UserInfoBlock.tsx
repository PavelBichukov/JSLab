import { useForm } from 'react-hook-form'

import { Button, FormController, Input, Typography } from 'components/share'
import { signUpContinue } from 'src/api'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './UserInfoBlock.module.scss'

export const UserInfoBlock = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    setError,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: any, e: any) => {
    console.log(data)
    e.preventDefault()
    try {
      const response = await signUpContinue(data)
      const { status, message } = response && response.data
      if (status === 'UPDATED') {
        dispatch(setCurrentStep(SIGN_UP_STEPS.BUSINESS_INFO))
      } else {
        throw new Error(message)
      }
    } catch (error) {
      console.log(error.message)
      if (error.message === 'User with the provided email already exists') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'User with the provided email already exists',
        })
      } else {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Oops... Something go wrong',
        })
      }
    }
  }
  return (
    <div className={styles.userInfoBlock}>
      <Typography variant="HeaderM">Welcome to JSLab</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        Let’s setup your account
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormController
            name="firstName"
            control={control}
            rules={{
              required: 'First Name is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Legal First Name"
                id="firstName"
              />
            )}
          />
          <FormController
            name="lastName"
            control={control}
            rules={{
              required: 'Last Name is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Legal Last Name"
                id="lastName"
              />
            )}
          />
          <FormController
            name="email"
            control={control}
            rules={{
              required: 'Email address is required!',
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
                label="Email Address"
                id="email"
              />
            )}
          />
          <FormController
            name="password"
            control={control}
            errorClassName={styles.passwordError}
            rules={{
              required: 'Password is required!',
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
        </div>
        <Button
          className={styles.formButton}
          type="submit"
          mode={isValid ? 'defaultBlack' : 'disabled'}
          variant="secondary"
          size="large"
          onClick={() => console.log('clicked')}
        >
          Continue
        </Button>
      </form>
    </div>
  )
}

export default UserInfoBlock
