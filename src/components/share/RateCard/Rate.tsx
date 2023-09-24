import { useState } from 'react'
import * as React from 'react'
import { createPortal } from 'react-dom'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { FormInput, Login } from 'components/share'
import { inputs as INPUTS } from 'components/share/Login/Login.constants'
import Modals from 'components/share/Modal/ModalWndw'
import ModalWndw from 'components/share/Modal/ModalWndw'
import { Typography } from 'components/share/Typography'

import styles from './Rate.module.scss'

const Rate = ({
  title,
  description,
  options,
}: {
  title: string
  description: string
  options: string[]
}) => {
  const [showModal, setShowModal] = useState(false)

  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className={styles.mainCard}>
      <Typography variant="HeaderM">{title}</Typography>
      <div className={styles.cardDescription}>
        <Typography variant="ParagraphL">{description}</Typography>
      </div>
      <div className={styles.cardListContainer}>
        <ul className={styles.cardList}>
          {options.map((option) => (
            <li key={option} className={styles.cardListElement}>
              <Typography variant="ParagraphL">{option}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.cardButton} onClick={openModal}>
        Select
      </button>
      {/*{showModal &&*/}
      {/*  createPortal(*/}
      {/*    <Modals onClose={() => setShowModal(false)}>*/}
      {/*      <form>*/}
      {/*        <Link*/}
      {/*          to="/"*/}
      {/*          className={styles.closeText}*/}
      {/*          onClick={() => setShowModal(false)}*/}
      {/*        >*/}
      {/*          &lt; Back*/}
      {/*        </Link>*/}
      {/*        <Typography variant="Header2XL" className={styles.formTitle}>*/}
      {/*          Register*/}
      {/*        </Typography>*/}
      {/*        {INPUTS.map((input) => (*/}
      {/*          <FormInput key={input.id} {...input} />*/}
      {/*        ))}*/}
      {/*        <button className={styles.buttonLogin}>Submit</button>*/}
      {/*      </form>*/}
      {/*    </Modals>,*/}
      {/*    document.body*/}
      {/*  )}*/}
      <ModalWndw
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </ModalWndw>
    </div>
  )
}
export default Rate
