import TestModal from 'components/TestModal/TestModal'
import { useModal } from 'src/hooks/useModal'

import Landing from './Landing'

const LandingContainer = () => {
  const [isOpen, openModal, closeModal] = useModal()
  //    было в Лэндинг пропсах
  return (
    <>
      <Landing onGetStartedClick={openModal} />
      <TestModal isOpen={isOpen} onModalClose={closeModal} />
    </>
  )
}

export default LandingContainer
