import { useState } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState(false)
  const openModal = () => {
    return setOpen(true)
  }
  const closeModal = () => {
    return setOpen(false)
  }
  return [open, openModal, closeModal] as const
}
