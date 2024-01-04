import { useEffect, useState } from 'react'

import { Button, Typography } from 'components/share'
import { getAllStations } from 'src/api'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './StationTypeBlock.module.scss'
import {
  IChildrenProps,
  IStation,
} from '../AddStationMainComponent/AddStation.types'

export const StationTypeBlock = ({
  stationState,
  setStationState,
}: IChildrenProps) => {
  const dispatch = useAppDispatch()

  const [stationType, setStationType] = useState('')
  const [isAnyStations, setStatus] = useState(false)

  const email = useAppSelector((state) => state.user.email)

  const handleUpdateState = () => {
    setStationState((stationState: IStation) => ({
      ...stationState,
      stationType: stationType,
      userEmail: email,
    }))
    dispatch(setCurrentStep(ADD_STATION_STEPS.GENERAL_INFORMATION))
  }

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await getAllStations(email)
        const { status } = response && response.data
        if (status === 'OK') {
          setStatus(true)
        }
      } catch (error) {
        alert('Oops... Something go wrong')
      }
    }
    getInfo()
    const { stationType } = stationState
    if (stationType) {
      setStationType(stationType)
    }
  }, [])

  return (
    <div className={styles.mainBlock}>
      <Typography variant="HeaderS" className={styles.title}>
        Select a Station Type
      </Typography>
      <div className={styles.buttonBlock}>
        <Button
          type="button"
          className={
            stationType === 'Gasoline / Diesel'
              ? styles.buttonSelectActive
              : styles.buttonSelect
          }
          mode="whiteShadow"
          variant="secondary"
          size="large"
          onClick={() => setStationType('Gasoline / Diesel')}
        >
          <Typography variant="LabelL">Gasoline / Diesel</Typography>
        </Button>
        <div>
          <Button
            type="button"
            className={
              stationType === 'Electric'
                ? styles.buttonSelectActive
                : styles.buttonSelect
            }
            mode={isAnyStations ? 'whiteShadow' : 'whiteShadowDisabled'}
            variant="secondary"
            size="large"
            disabled={!isAnyStations}
            onClick={() => setStationType('Electric')}
          >
            <Typography variant="LabelL">
              {isAnyStations ? 'Electric ' : 'Electric (Coming Soon)'}
            </Typography>
          </Button>
          <Button
            type="button"
            className={
              stationType === 'Both'
                ? styles.buttonSelectActive
                : styles.buttonSelect
            }
            mode={isAnyStations ? 'whiteShadow' : 'whiteShadowDisabled'}
            variant="secondary"
            size="large"
            disabled={!isAnyStations}
            onClick={() => setStationType('Both')}
          >
            <Typography variant="LabelL">
              {isAnyStations ? 'Both ' : 'Both (Coming Soon)'}
            </Typography>
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
        mode={stationType === '' ? 'disabled' : 'defaultBlack'}
        variant="primary"
        size="large"
        className={styles.buttonContinue}
        onClick={handleUpdateState}
      >
        Continue
      </Button>
    </div>
  )
}

export default StationTypeBlock
