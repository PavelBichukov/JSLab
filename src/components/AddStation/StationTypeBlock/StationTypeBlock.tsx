import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, FormController, Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './StationTypeBlock.module.scss'

export const StationTypeBlock = () => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      termsCheckBox: '',
    },
  })

  const onSubmit = () => {
    console.log('Terms checkbox is checked')
  }

  const handleClick = () => {
    setIsActive((current) => !current)
  }
  return (
    <div>
      <Typography variant="HeaderM">Select a Station Type</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.buttonBlock}>
          <FormController
            name="btnCheck"
            control={control}
            errorClassName={styles.btnError}
            rules={{
              required: true,
            }}
            render={({ field: { onBlur } }: any) => (
              <Button
                onBlur={onBlur}
                type="button"
                className={
                  isActive ? styles.buttonSelectActive : styles.buttonSelect
                }
                mode="whiteShadow"
                variant="secondary"
                size="large"
                onClick={handleClick}
              >
                <Typography variant="LabelL">Gasoline / Diesel</Typography>
              </Button>
            )}
          />
          <div>
            <Button
              type="button"
              className={styles.buttonDisabled}
              mode="whiteShadowDisabled"
              variant="secondary"
              size="large"
            >
              <Typography variant="LabelL">Electric (Coming Soon)</Typography>
            </Button>
            <Button
              type="button"
              className={styles.buttonDisabled}
              mode="whiteShadowDisabled"
              variant="secondary"
              size="large"
            >
              <Typography variant="LabelL">Both (Coming Soon)</Typography>
            </Button>
            <Typography variant="ParagraphS" className={styles.btnParagraph}>
              This information is used to determine which POS system will be
              integrated with during setup. After the station is created - other
              systems may be added to JSLab.
            </Typography>
          </div>
        </div>
        <Button
          type="submit"
          mode={isActive ? 'defaultBlack' : 'disabled'}
          variant="primary"
          size="large"
          className={styles.buttonContinue}
          onClick={() =>
            dispatch(setCurrentStep(ADD_STATION_STEPS.GENERAL_INFORMATION))
          }
          disabled={!isActive}
        >
          Continue
        </Button>
      </form>
    </div>
  )
}

export default StationTypeBlock
