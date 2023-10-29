import { Button, MainLayout, Modal, Typography } from 'components/share'
import { AddStationMainComponent } from 'src/components'
import { useModal } from 'src/hooks/useModal'

import styles from './Home.module.scss'

const Home = () => {
  const [isOpenSmall, openModalSmall, closeModalSmall] = useModal()
  const [isOpenBig, openModalBig, closeModalBig] = useModal()
  const openModalHandler = () => {
    closeModalSmall()
    openModalBig()
  }
  return (
    <div className={styles.main}>
      <MainLayout title="Home">
        <h3>Home</h3>
        {!isOpenSmall ? openModalSmall() : console.log('no')}
        <Modal
          isOpen={isOpenSmall}
          onModalClose={closeModalSmall}
          withCloseButton={false}
          variant="small"
        >
          <Typography variant="HeaderL" className={styles.headerElement}>
            Welcome to JSLab!
          </Typography>
          <Typography variant="ParagraphL" className={styles.paragraphElement}>
            Here, you’ll be able to navigate throughout different sections of
            the app - where you can manage your Stations, Payments, and setup
            Campaigns to draw more people into your stores. (to name a few).
          </Typography>
          <Typography variant="ParagraphL" className={styles.secondParagraph}>
            But to get started - let’s add your first station to JSLab.
          </Typography>
          <Button
            type="submit"
            mode="defaultBlack"
            variant="secondary"
            size="large"
            className={styles.mainButton}
            onClick={openModalHandler}
          >
            Get Started
          </Button>
        </Modal>
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
export default Home
