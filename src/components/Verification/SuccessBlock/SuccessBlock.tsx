import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as SuccessIcon } from 'assets/icons/SuccessIcon.svg'
import { Typography } from 'components/share'

import styles from './successBlock.module.scss'

export const SuccessBlock = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/signup-continue')
    }, 2000)
  }, [])
  return (
    <div className={styles.successBlock}>
      <SuccessIcon />
      <Typography variant="HeaderM"> Success</Typography>
    </div>
  )
}

export default SuccessBlock
