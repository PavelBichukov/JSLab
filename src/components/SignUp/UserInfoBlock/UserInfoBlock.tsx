import { useState } from 'react'

import { Typography } from 'src/components/share/Typography'
import { Input } from 'src/components/share'

import { useForm, Controller } from 'react-hook-form'

import styles from './UserInfoBlock.module.scss'

export const UserInfoBlock = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
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
          <Controller
            defaultValue={''}
            name="firstName"
            control={control}
            rules={{
              required: 'Field is required!',
            }}
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                innerRef={field.ref}
                variant="text"
                label="Legal First Name"
                id="firstName"
              ></Input>
            )}
          />
          {errors?.firstName && (
            <p className={styles.errorMessage}>
              {errors?.firstName?.message as string}
            </p>
          )}
          <Controller
            defaultValue={''}
            name="lastName"
            control={control}
            rules={{
              required: 'Field is required!',
            }}
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                innerRef={field.ref}
                variant="text"
                label="Legal Last Name"
                id="lastName"
              ></Input>
            )}
          />
          {errors?.lastName && (
            <p className={styles.errorMessage}>
              {errors?.lastName?.message as string}
            </p>
          )}
          <Controller
            defaultValue={''}
            name="email"
            control={control}
            rules={{
              required: 'Field is required!',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email address!',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                innerRef={field.ref}
                variant="email"
                label="Email Address"
                id="email"
              ></Input>
            )}
          />
          {errors?.email && (
            <p className={styles.errorMessage}>
              {errors?.email?.message as string}
              {errors?.pattern?.message as string}
            </p>
          )}
          <Controller
            defaultValue={''}
            name="password"
            control={control}
            rules={{
              required: 'Field is required!',
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                message:
                  'Password must contain: a lower case letter, a upper case letter, a number, minimum 6 characters',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                innerRef={field.ref}
                variant="password"
                label="Password"
                id="password"
              ></Input>
            )}
          />
          {errors?.password && (
            <p className={styles.errorMessage}>
              {errors?.password?.message as string}
            </p>
          )}
        </div>
        <button className={styles.formButton} disabled={!isValid}>
          Continue
        </button>
      </form>
    </div>
  )
}

export default UserInfoBlock
