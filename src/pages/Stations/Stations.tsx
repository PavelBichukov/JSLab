import { Button, MainLayout} from 'components/share'

import styles from './Stations.module.scss'

const Stations = () => (
  <div className={styles.main}>
    <MainLayout tittle='Stations' headerActions = {
      <Button mode='defaultBlack' variant='primary' size='small'>Test</Button>
    }>
      <div>
        <h2>Stations</h2>
      </div>
    </MainLayout>
  </div>
)
export default Stations
