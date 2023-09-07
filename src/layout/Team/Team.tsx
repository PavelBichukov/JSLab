import styles from './Team.module.scss'
import TeamCard from 'components/share/TeamCard/TeamCard'

const Team = () => {
  return (
    <div>
      <p className={styles.teamTitle}>Our development team</p>
      <div>
        <TeamCard
          src="../../../assets/images/mikita.png"
          name="smt"
          jobTitle="smt"
          email="smt"
        />
      </div>
    </div>
  )
}
export default Team
