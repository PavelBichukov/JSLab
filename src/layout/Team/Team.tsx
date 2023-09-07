import styles from './Team.module.scss'
import TeamCard from 'components/share/TeamCard/TeamCard'
import imgNikita from '../../assets/images/mikita.png'
import imgPavel from '../../assets/images/pavel.png'
import imgAnton from '../../assets/images/anton.png'
import imgDenis from '../../assets/images/denis.png'
import imgDasha from '../../assets/images/dasha.png'

const Team = () => {
  return (
    <div>
      <p className={styles.teamTitle}>Our development team</p>
      <div className={styles.teamCards}>
        <TeamCard
          imgSrc={imgDasha}
          name="Dasha Kavalenka"
          jobTitle="Group Manager"
          email="darya.kavalenka@ventionteams.com"
        />
        <TeamCard
          imgSrc={imgDenis}
          name="Denis Kozyrev"
          jobTitle="Tech Lead"
          email="deniskozyrev55@gmail.com"
        />
        <TeamCard
          imgSrc={imgAnton}
          name="Anton Gavrilenko"
          jobTitle="Tech Lead"
          email="gavrilenko7732@gmail.com"
        />
        <TeamCard
          imgSrc={imgNikita}
          name="Nikita Pelikh"
          jobTitle="Software Developer"
          email="mikitapelikh@gmail.com"
        />
        <TeamCard
          imgSrc={imgPavel}
          name="Pavel Bichukou"
          jobTitle="Software Developer"
          email="pavel.bichukou@itechart-group.com"
        />
      </div>
    </div>
  )
}
export default Team
