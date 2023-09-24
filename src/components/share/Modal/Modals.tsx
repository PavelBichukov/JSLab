import { MouseEventHandler } from 'react'
import * as React from 'react'
import Modal from 'react-modal'

import styles from './Modals.module.scss'

const Modals = ({
  children,
  modalIsOpen,
  closeModal,
}: {
  children?: any
  modalIsOpen: boolean
  closeModal: MouseEventHandler<HTMLButtonElement> | undefined
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    className={styles.modal}
    overlayClassName={styles.overlay}
    contentLabel="Modals"
    appElement={document.querySelector('#root')}
  >
    {children}
  </Modal>
)

export default Modals
