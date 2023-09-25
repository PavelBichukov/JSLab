import cn from 'classnames'
import { useForm, Controller } from 'react-hook-form'

import { Typography } from 'src/components/share/Typography'
import { Input, FormController } from 'src/components/share'

import styles from './UserInfoBlock.module.scss'

export const UserInfoBlock = () => {
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
    console.log(JSON.stringify(data))
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
              required: 'Field is required!',
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
              required: 'Field is required!',
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
        </div>
        <button
          className={cn(styles.formButton, {
            [styles.formButtonDisabled]: !isValid,
          })}
        >
          Continue
        </button>
      </form>
    </div>
  )
}

export default UserInfoBlock
