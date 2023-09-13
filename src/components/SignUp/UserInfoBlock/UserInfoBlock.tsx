import { useState } from 'react'

import { ReactComponent as EyeIcon } from 'assets/icons/Eye.svg'
import { Typography } from 'src/components/share/Typography'

import { userFormConstants } from './userFormConstants'
import styles from './UserInfoBlock.module.scss'

export const UserInfoBlock = () => {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className={styles.userInfoBlock}>
      <Typography variant="HeaderM">Welcome to JSLab</Typography>
      <Typography variant="ParagraphL">Let’s setup your account</Typography>
      <form className={styles.form}>
        <div>
          {userFormConstants.map((input) => (
            <div className={styles.inputBox} key={input.id}>
              <input
                className={styles.formInput}
                type={
                  input.type === 'password' && showPass ? 'text' : input.type
                }
                name={input.type}
                id={input.id.toString()}
                placeholder=""
                onChange={(e) => console.log(e.target.value)}
              />
              <label htmlFor={input.id.toString()}>{input.name}</label>
              <EyeIcon
                className={styles.eyeIcon}
                style={{ display: input.id === 4 ? '' : 'none' }}
                onClick={() => setShowPass(!showPass)}
              />
            </div>
          ))}
        </div>
        <button className={styles.formButton}>Continue</button>
      </form>
    </div>
  )
}

export default UserInfoBlock
