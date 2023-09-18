import TeamCard from 'components/share/TeamCard/TeamCard'

import { teams as TEAMS } from './Team.constants'
import styles from './Team.module.scss'
const Team = () => (
  <div>
    <p className={styles.teamTitle}>Our development team</p>
    <div className={styles.teamCards}>
      {TEAMS.map((team) => (
        <TeamCard
          key={team.email}
          imgSrc={team.imgSrc}
          name={team.name}
          jobTitle={team.jobTitle}
          email={team.email}
        />
      ))}
    </div>
  </div>
)
export default Team
