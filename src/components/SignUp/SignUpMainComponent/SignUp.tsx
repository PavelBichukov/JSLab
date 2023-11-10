import cn from 'classnames'

import { Typography } from 'components/share'
import {
  BusinessInfoBlock,
  BusinessLocation,
  TermsAndConditions,
  UserInfoBlock,
} from 'src/components'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { getStepIndex } from 'src/utils'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import { progressBarConstants } from './progressBarConstants'
import styles from './SignUpMainComponent.module.scss'

const _renderStep = (step: string) => {
  switch (step) {
    case SIGN_UP_STEPS.SUCCESS: {
      return <UserInfoBlock />
    }
    case SIGN_UP_STEPS.BUSINESS_INFO: {
      return <BusinessInfoBlock />
    }
    case SIGN_UP_STEPS.BUSINESS_LOCATION: {
      return <BusinessLocation />
    }
    case SIGN_UP_STEPS.TERMS_AND_CONDITIONS: {
      return <TermsAndConditions />
    }
    default:
      ;<></>
  }
}

export const SignUpMainComponent = () => {
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

export default SignUpMainComponent
