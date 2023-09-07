import styles from './TeamCard.module.scss'
import { MdEmail } from 'react-icons/md'

const TeamCard = (props) => {
  const { imgSrc, name, jobTitle, email } = props
  return (
    <div className={styles.mainCard}>
      <img src={imgSrc} alt={name} className={styles.imgCard} />
      <p className={styles.cardName}>{name}</p>
      <p className={styles.cardJobTitle}>{jobTitle}</p>
      <div className={styles.cardEmail}>
        <MdEmail />
        {email}
      </div>
    </div>
  )
}
export default TeamCard
