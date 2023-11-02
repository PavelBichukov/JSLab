import { useForm } from 'react-hook-form'

import { posSystems } from 'components/AddStation/ConnectSystemBlock/ConnectSystem.constants'
import { Button, FormController, Select, Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './ConnectSystem.module.scss'

export const ConnectSystem = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      posSystem: '',
    },
  })
  const onSubmit = () => {
    dispatch(setCurrentStep(ADD_STATION_STEPS.FINALIZE))
  }
  const onBack = () => {
    dispatch(setCurrentStep(ADD_STATION_STEPS.CONNECT_YOUR_BANK))
  }
  const onDownload = () => {
    console.log('download')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              We’ll provide you with a step-by-step guide to enable JSLab
              payments at your location.
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
            onClick={() => console.log('clicked')}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ConnectSystem
