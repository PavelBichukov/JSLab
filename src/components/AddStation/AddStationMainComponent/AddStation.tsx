import cn from 'classnames'

import { Typography } from 'components/share'
import { StationTypeBlock } from 'src/components/AddStation'
import styles from 'src/components/SignUp/SignUpMainComponent/SignUpMainComponent.module.scss'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { getStepIndex } from 'src/utils'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import { progressBarConstants } from './progressBarConstants'

const _renderStep = (step: string) => {
  switch (step) {
    case ADD_STATION_STEPS.STATION_TYPE: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.GENERAL_INFORMATION: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.STATION_AMENITIES: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_BANK: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.FINALIZE: {
      return <StationTypeBlock />
    }
    default:
      return <StationTypeBlock />
  }
}

export const AddStationMainComponent = () => {
  const currentStep = useAppSelector(
    (state) => state.addStationStep.currentStep
  )
  console.log(currentStep)
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default AddStationMainComponent
