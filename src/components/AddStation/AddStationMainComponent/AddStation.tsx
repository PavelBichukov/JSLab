import cn from 'classnames'

import { Typography } from 'components/share'
import {
  BusinessInfoBlock,
  BusinessLocation,
  TermsAndConditions,
  UserInfoBlock,
} from 'src/components'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { getStepIndex } from 'src/utils'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './AddStationMainComponent.module.scss'
import { progressBarConstants } from './progressBarConstants'

const _renderStep = (step: string) => {
  switch (step) {
    case ADD_STATION_STEPS.STATION_TYPE: {
      return <UserInfoBlock />
    }
    case ADD_STATION_STEPS.GENERAL_INFORMATION: {
      return <BusinessInfoBlock />
    }
    case ADD_STATION_STEPS.STATION_AMENITIES: {
      return <BusinessLocation />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_BANK: {
      return <TermsAndConditions />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM: {
      return <TermsAndConditions />
    }
    case ADD_STATION_STEPS.FINALIZE: {
      return <TermsAndConditions />
    }
    default:
      ;<></>
  }
}

export const AddStationMainComponent = () => {
  const currentStep = useAppSelector((state) => state.signUpStep.currentStep)
  return (
    <div className={styles.container}>
      <div className={styles.signUpBlock}>
        <section className={styles.sideSection}>
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
