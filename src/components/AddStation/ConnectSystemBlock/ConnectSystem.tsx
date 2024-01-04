import { useForm } from 'react-hook-form'

import { Button, FormController, Select, Typography } from 'components/share'
import { addStation } from 'src/api'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { setStationID } from 'src/store/user'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import { posSystems } from './ConnectSystem.constants'
import styles from './ConnectSystem.module.scss'
import { IChildrenProps } from '../AddStationMainComponent/AddStation.types'

export const ConnectSystem = ({ stationState }: IChildrenProps) => {
  const dispatch = useAppDispatch()

  const email = useAppSelector((state) => state.user.email)

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      posSystem: '',
    },
  })
  const onSubmit = async (data: any) => {
    try {
      const response = await addStation({
        ...stationState,
        userEmail: email,
        posSystem: data.posSystem.value,
      })
      const { status, message } = response && response.data

      if (status === 'UPDATED') {
        dispatch(setStationID(message.id))
        dispatch(setCurrentStep(ADD_STATION_STEPS.FINALIZE))
      } else {
        throw new Error(message)
      }
    } catch (error) {
      if (error.message === 'Empty user email field') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Empty user email field',
        })
      } else {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Oops... Something go wrong',
        })
      }
    }
  }

  const onBack = () => {
    dispatch(setCurrentStep(ADD_STATION_STEPS.CONNECT_YOUR_BANK))
  }
  const onDownload = () => {
    console.log('download')
  }
  return (
    <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.mainBlockContainer}>
        <Typography variant="HeaderS">Select Your POS System</Typography>
        <div className={styles.dropDownPOS}>
          <FormController
            name="posSystem"
            control={control}
            rules={{
              required: 'POS System is required!',
            }}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={posSystems}
                placeholder="POS System"
              />
            )}
          />
          <Typography variant="HeaderS" className={styles.downloadTitle}>
            Download Instructions
          </Typography>
          <Typography variant="ParagraphL" className={styles.paragraph}>
            We’ll provide you with a step-by-step guide to enable JSLab payments
            at your location.
          </Typography>
          <Button
            type="button"
            mode="defaultBlack"
            variant="secondary"
            size="large"
            className={styles.buttonStyles}
            onClick={onDownload}
          >
            + Download pdf
          </Button>
          <Typography variant="ParagraphL" className={styles.paragraphNeed}>
            Need Support?
          </Typography>
        </div>
      </div>
      <div className={styles.buttonsBlock}>
        <Button
          className={styles.buttonBack}
          type="button"
          mode="outlinedWhite"
          variant="primary"
          size="small"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          className={styles.buttonFinished}
          type="submit"
          mode={isValid ? 'defaultBlack' : 'disabled'}
          variant="primary"
          size="small"
        >
          Next
        </Button>
      </div>
    </form>
  )
}

export default ConnectSystem
