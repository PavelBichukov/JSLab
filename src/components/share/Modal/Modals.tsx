import { MouseEventHandler } from 'react'
import Modal from 'react-modal'

import styles from './Modals.module.scss'

const Modals = ({
  isOpen,
  children,
  closeModal,
}: {
  isOpen: boolean
  children?: any
  closeModal: MouseEventHandler<HTMLButtonElement> | undefined
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className={styles.modal}
    overlayClassName={styles.overlay}
    contentLabel="Modals"
    appElement={document.querySelector('#root') as HTMLElement}
  >
    {children}
  </Modal>
)

export default Modals
