import cn from 'classnames'
import Modal from 'react-modal'

import styles from './Modal.module.scss'

const VARIANTS = {
  small: styles.small,
  medium: styles.medium,
}
const CustomModal = ({
  isOpen,
  children,
  onModalClose,
  variant,
  withCloseButton,
}: {
  isOpen: boolean
  children?: any
  onModalClose: any
  variant: string
  withCloseButton: boolean
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onModalClose}
    className={cn((VARIANTS as any)[variant]!)}
    overlayClassName={styles.overlay}
    contentLabel="Modal"
    appElement={document.querySelector('#root') as HTMLElement}
  >
    {withCloseButton && (
      <button className={styles.closeButton} onClick={onModalClose}>
        X
      </button>
    )}
    {children}
  </Modal>
)

export default CustomModal
