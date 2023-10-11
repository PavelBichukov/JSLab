import { useForm } from 'react-hook-form'

import { Button, FormController, Input, Typography } from 'components/share'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

export const StationTypeBlock = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    setError,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  return (
    <div>
      <Typography variant="HeaderM">Welcome to JSLab</Typography>
    </div>
  )
}

export default StationTypeBlock
