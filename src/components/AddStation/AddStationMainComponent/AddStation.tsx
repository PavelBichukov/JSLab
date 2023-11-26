import cn from 'classnames'
import { useState } from 'react'

import {
  ConnectBank,
  ConnectSystem,
  Finalize,
  GeneralInfoBlock,
  StationAmenities,
  StationTypeBlock,
} from 'components/AddStation'
import { Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { getStepIndex } from 'src/utils'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './AddStation.module.scss'
import { IStation } from './AddStation.types'
import { progressBarConstants } from './progressBarConstants'

const _renderStep = (
  step: string,
  state: IStation,
  setState: (prev: (value: IStation) => IStation) => void
) => {
  switch (step) {
    case ADD_STATION_STEPS.STATION_TYPE: {
      return (
        <StationTypeBlock stationState={state} setStationState={setState} />
      )
    }
    case ADD_STATION_STEPS.GENERAL_INFORMATION: {
      return (
        <GeneralInfoBlock stationState={state} setStationState={setState} />
      )
    }
    case ADD_STATION_STEPS.STATION_AMENITIES: {
      return (
        <StationAmenities stationState={state} setStationState={setState} />
      )
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_BANK: {
      return <ConnectBank stationState={state} setStationState={setState} />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM: {
      return <ConnectSystem stationState={state} />
    }
    case ADD_STATION_STEPS.FINALIZE: {
      return <Finalize />
    }
    default:
      return (
        <StationTypeBlock stationState={state} setStationState={setState} />
      )
  }
}

export const AddStationMainComponent = () => {
  const [stationState, setStationState] = useState({
    userEmail: '',
    stationId: '',
    stationType: '',
    stationBrand: '',
    stationName: '',
    latitude: '',
    longitude: '',
    phoneNumber: '',
    emailAddress: '',
    stationAmenities: [],
    paymentMethod: '',
    accountNickname: '',
    accountType: '',
    routingNumber: '',
    accountNumber: '',
    bankAccountId: '',
    posSystem: '',
  } as IStation)

  const currentStep = useAppSelector(
    (state) => state.addStationStep.currentStep
  )
  return (
    <div className={styles.signUpBlock}>
      <section className={styles.sideSection}>
        <Typography variant="HeaderM" className={styles.headerStation}>
          Add a Station
        </Typography>
        <div className={styles.progressBar}>
          {progressBarConstants.map((item) => (
            <div
              className={cn(styles.progressBarItem, {
                [styles.progressBarItemActive]:
                  getStepIndex(item.key, progressBarConstants) <=
                  getStepIndex(currentStep, progressBarConstants),
              })}
              key={item.key}
            >
              <div className={styles.circleNumber}>
                <Typography variant="LabelL">
                  {getStepIndex(item.key, progressBarConstants)}
                </Typography>
              </div>
              <Typography variant="ParagraphL">{item.name}</Typography>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.formBlock}>
        {_renderStep(currentStep, stationState, setStationState)}
      </div>
    </div>
  )
}

export default AddStationMainComponent
