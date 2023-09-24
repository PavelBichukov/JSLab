import { MouseEventHandler } from 'react'
import * as React from 'react'
import Modal from 'react-modal'

import styles from './ModalWndw.module.scss'

const ModalWndw = ({
  children,
  modalIsOpen,
  closeModal,
}: {
  children?: any
  modalIsOpen: boolean
  closeModal: MouseEventHandler<HTMLButtonElement> | undefined
}) => {
  const customStyles = {
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      width: '27%',
      height: 'auto',
      zIndex: '1000',
      borderRadius: '20px',
    },
  }
  const overlay = {
    content: {
      width: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'green',
      zIndex: '1000',
    },
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName={overlay}
      contentLabel="Example Modal"
      appElement={document.querySelector('#root')}
    >
      {children}
    </Modal>
  )
}

export default ModalWndw
