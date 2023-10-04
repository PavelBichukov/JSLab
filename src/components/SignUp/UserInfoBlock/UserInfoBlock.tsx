import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'

import { Button, FormController, Input, Typography } from 'components/share'
import { setCurrentStep } from 'src/store/signUp'

import styles from './UserInfoBlock.module.scss'

export const UserInfoBlock = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      legalFirstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
    dispatch(setCurrentStep(SIGN_UP_STEPS.BUSINESS_INFO))
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
            name="legalFirstName"
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
                id="legalFirstName"
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
