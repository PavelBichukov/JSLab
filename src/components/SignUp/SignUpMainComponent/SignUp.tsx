import cn from 'classnames'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import { Typography } from 'components/share'
import {
  BusinessInfoBlock,
  BusinessLocation,
  TermsAndConditions,
  UserInfoBlock,
} from 'src/components'

import { progressBarConstants } from './progressBarConstants'
import styles from './SignUpMainComponent.module.scss'

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
                  [styles.progressBarItemActive]: currentStep >= item.id,
                })}
                key={item.id}
              >
                <div className={styles.circleNumber}>
                  <Typography variant="LabelL">{item.id-2}</Typography>
                </div>
                <Typography variant="ParagraphL">{item.name}</Typography>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.formBlock}>
          {currentStep === 3 && <UserInfoBlock />}
          {currentStep === 4 && <BusinessInfoBlock />}
          {currentStep === 5 && <BusinessLocation />}
          {currentStep === 6 && <TermsAndConditions />}
        </div>
      </div>
    </div>
  )
}

export default SignUpMainComponent
