import { Button, MainLayout, Modal } from 'components/share'
import { AddStationMainComponent, Table } from 'src/components'
import { useModal } from 'src/hooks/useModal'

import styles from './Stations.module.scss'

const Stations = () => {
  const [isOpenBig, openModalBig, closeModalBig] = useModal()
  return (
    <div className={styles.main}>
      <MainLayout
        title="Stations"
        headerActions={
          <Button
            type="button"
            size="medium"
            mode="defaultBlack"
            variant="primary"
            className={styles.buttonMain}
            onClick={openModalBig}
          >
            Add a station
          </Button>
        }
      >
        <Table />
        <Modal
          isOpen={isOpenBig}
          onModalClose={closeModalBig}
          withCloseButton={false}
          variant="medium"
        >
          <AddStationMainComponent />
        </Modal>
      </MainLayout>
    </div>
  )
}
export default Stations
