import { MdEmail } from 'react-icons/md'

import { Typography } from 'components/share/Typography'

import styles from './TeamCard.module.scss'

const TeamCard = (props) => {
  const { imgSrc, name, jobTitle, email } = props
  return (
    <div className={styles.mainCard}>
      <img src={imgSrc} alt={name} className={styles.imgCard} />
      <Typography variant="HeaderM" className={styles.cardName}>
        {name}
      </Typography>
      <Typography variant="HeaderM" className={styles.cardJobTitle}>
        {jobTitle}
      </Typography>
      <div className={styles.cardEmail}>
        <MdEmail />
        {email}
      </div>
    </div>
  )
}
export default TeamCard
