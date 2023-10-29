import { Button, MainLayout } from 'components/share'

import styles from './Stations.module.scss'

const Stations = () => (
  <div className={styles.main}>
    <MainLayout
      title="Stations"
      headerActions={
        <Button
          type="button"
          size="small"
          mode="defaultBlack"
          variant="primary"
          className={styles.buttonMain}
          onClick={() => console.log('click')}
        >
          Test
        </Button>
      }
    >
      <div>
        <h2>Stations</h2>
      </div>
    </MainLayout>
  </div>
)
export default Stations
