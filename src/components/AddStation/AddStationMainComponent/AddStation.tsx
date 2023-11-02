import cn from 'classnames'

import {
  ConnectBank,
  ConnectSystem,
  Finalize,
  GeneralInfoBlock,
  StationTypeBlock,
} from 'components/AddStation'
import { Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { getStepIndex } from 'src/utils'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './AddStation.module.scss'
import { progressBarConstants } from './progressBarConstants'

const _renderStep = (step: string) => {
  switch (step) {
    case ADD_STATION_STEPS.STATION_TYPE: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.GENERAL_INFORMATION: {
      return <GeneralInfoBlock />
    }
    case ADD_STATION_STEPS.STATION_AMENITIES: {
      return <ConnectBank />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_BANK: {
      return <ConnectBank />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM: {
      return <ConnectSystem />
    }
    case ADD_STATION_STEPS.FINALIZE: {
      return <Finalize />
    }
    default:
      return <StationTypeBlock />
  }
}

export const AddStationMainComponent = () => {
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
      <div className={styles.formBlock}>{_renderStep(currentStep)}</div>
    </div>
  )
}

export default AddStationMainComponent
