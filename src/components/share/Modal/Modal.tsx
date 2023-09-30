import { MouseEventHandler } from 'react'
import * as ReactModal from 'react-modal'

import styles from './Modal.module.scss'

const Modal = ({
  isOpen,
  children,
  onModalClose,
}: {
  isOpen: boolean
  children?: any
  onModalClose: MouseEventHandler<HTMLButtonElement> | undefined
}) => (
  //todo use hook
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onModalClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
    contentLabel="Modal"
    appElement={document.querySelector('#root') as HTMLElement}
  >
    {children}
  </ReactModal>
)

export default Modal
