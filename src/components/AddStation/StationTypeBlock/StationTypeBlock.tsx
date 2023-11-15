import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, FormController, Typography } from 'components/share'
import { addStation } from 'src/api/api'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { setStationID } from 'src/store/user'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './StationTypeBlock.module.scss'

export const StationTypeBlock = () => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)

  const email = useAppSelector((state) => state.user.email)

  const { control, handleSubmit, setError } = useForm({
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

  const handleSendRequest = async () => {
    try{
      const response = await addStation(
        {"stationType" : "Gasoline",
          "userEmail" : email
        }
      )
      const { status, message } = response && response.data
      if(status === 'UPDATED') {
        dispatch(setCurrentStep(ADD_STATION_STEPS.GENERAL_INFORMATION))
        setStationID(message.id)
      } else {
        throw new Error(message)
      }
    } catch (error) {
      if(error.message === 'Empty station type field') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Empty station type field',
        })
      } else {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Oops... Something go wrong',
        })
      }
    }
  }


  return (
    <div className={styles.mainBlock}>
      <Typography variant="HeaderS" className={styles.title}>
        Select a Station Type
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.buttonBlock}>
          <FormController
            name="btnCheck"
            control={control}
            errorClassName={styles.btnError}
            rules={{
              required: true,
            }}
            render={() => (
              <Button
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
              onClick={() => console.log('click')}
            >
              <Typography variant="LabelL">Electric (Coming Soon)</Typography>
            </Button>
            <Button
              type="button"
              className={styles.buttonDisabled}
              mode="whiteShadowDisabled"
              variant="secondary"
              size="large"
              onClick={() => console.log('click')}
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
            handleSendRequest()
          }
        >
          Continue
        </Button>
      </form>
    </div>
  )
}

export default StationTypeBlock
