import { ChangeEventHandler, ComponentProps } from 'react'

export interface IInputProps extends ComponentProps<'input'> {
  type: string
  className?: string
  label: string
  labelClassName?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  id?: string
}
