import { MouseEventHandler } from 'react'

import { Modal } from 'components/share'

const TestModal = ({
  isOpen,
  onModalClose,
}: {
  isOpen: boolean
  onModalClose: MouseEventHandler<HTMLButtonElement> | undefined
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onModalClose={onModalClose}
      withCloseButton={false}
      variant="medium"
    >
      <div>Test Render</div>
    </Modal>
  )
}
export default TestModal
