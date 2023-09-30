import { ChangeEventHandler, ComponentProps } from 'react'

export interface IInputProps extends ComponentProps<'input'> {
  innerRef?: any
  variant: string
  className?: string
  label: string
  labelClassName?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  id: string
}
