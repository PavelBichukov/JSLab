import { MainLayout } from 'components/share'
import { SelectedStation } from 'src/components'

import styles from './SelectedStation.module.scss'

const SelectedStationPage = () => {
  return (
    <div className={styles.main}>
      <MainLayout title="Stations" navLinkTo = {'/stations'}>
        <SelectedStation/>
      </MainLayout>
    </div>
  )
}
export default SelectedStationPage
