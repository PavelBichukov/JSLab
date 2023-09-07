import styles from './TeamCard.module.scss'
import { MdEmail } from 'react-icons/md'
import Img1 from './assets/mikita.png'

const TeamCard = (props) => {
  const { src, name, jobTitle, email } = props
  return (
    <div style={{ width: '100%' }}>
      <img src={Img1} width="300" height="300" alt={name} />
      {/*<img src={src} alt={name} width="100px" height="100px" />*/}
      <p>{name}</p>
      <p>{jobTitle}</p>
      <div>
        <MdEmail />
        {email}
      </div>
    </div>
  )
}
export default TeamCard
