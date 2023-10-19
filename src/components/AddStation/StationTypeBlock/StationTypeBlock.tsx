import { useForm } from 'react-hook-form'

import { Button, Checkbox, FormController, Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './StationTypeBlock.module.scss'

export const StationTypeBlock = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      termsCheckBox: '',
    },
  })

  const onSubmit = () => {
    console.log('Terms checkbox is checked')
  }

  return (
    <div>
      <Typography variant="HeaderM">Select a Station Type {isValid}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormController
            name="termsCheckBox"
            control={control}
            rules={{
              required: 'Field is required!',
            }}
            render={({ field }: any) => (
              <Checkbox
                {...field}
                ref={null}
                id="termsCheckBox"
                hasError={!!errors?.termsCheckBox}
              />
            )}
          />
        </div>
        <div>
          <Button
            type="submit"
            mode={isValid ? 'defaultBlack' : 'disabled'}
            variant="primary"
            size="medium"
            onClick={() =>
              dispatch(setCurrentStep(ADD_STATION_STEPS.GENERAL_INFORMATION))
            }
          >
            Finished
          </Button>
        </div>
      </form>
    </div>
  )
}

export default StationTypeBlock
