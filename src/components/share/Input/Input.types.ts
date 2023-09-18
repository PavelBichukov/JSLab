import { ChangeEventHandler, ComponentProps } from 'react'

export interface IInputProps extends ComponentProps<'input'> {
  variant: string
  className?: string
  label: string
  labelClassName?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  id?: string
}
