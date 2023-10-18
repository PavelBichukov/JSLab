import { useForm } from 'react-hook-form'

import { Typography } from 'components/share'

export const StationTypeBlock = () => {
  const {
    formState: { isValid },
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
      <Typography variant="HeaderM">Welcome to JSLab {isValid}</Typography>
    </div>
  )
}

export default StationTypeBlock
