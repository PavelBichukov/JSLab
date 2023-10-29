import cn from 'classnames'
import * as ReactModal from 'react-modal'

import styles from './Modal.module.scss'

const VARIANTS = {
  small: styles.small,
  medium: styles.medium,
}
const Modal = ({
  isOpen,
  children,
  onModalClose,
  variant,
  withCloseButton,
}: {
  isOpen: any
  children?: any
  onModalClose: any
  variant: string
  withCloseButton: boolean
}) => (
  <ReactModal
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
  </ReactModal>
)

export default Modal
