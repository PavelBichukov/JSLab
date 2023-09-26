import { ComponentProps } from 'react'

export interface ICheckboxProps extends ComponentProps<'input'> {
  id: string
  hasError: boolean
  className?: string
}
