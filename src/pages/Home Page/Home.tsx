import { MainLayout } from 'components/share'

import styles from './Home.module.scss'

const Home = () => (
  <div className={styles.main}>
    <MainLayout tittle='Home'>
      <div>
        <h3>Home Page</h3>
      </div>
    </MainLayout>
  </div>
)
export default Home
