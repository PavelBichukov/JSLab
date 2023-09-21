import { MouseEventHandler } from 'react'

import styles from './Modal.module.scss'

export default function Modal({
  onClose,
}: {
  onClose: MouseEventHandler<HTMLButtonElement> | undefined
}) {
  return (
    <div className={styles.modal}>
      <div>Im a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
