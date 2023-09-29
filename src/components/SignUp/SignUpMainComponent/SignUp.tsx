import cn from 'classnames'
import { useState } from 'react'

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
  const [currentStep, setCurrenStep] = useState(1)

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
                onClick={() => setCurrenStep(item.id)}
              >
                <div className={styles.circleNumber}>
                  <Typography variant="LabelL">{item.id}</Typography>
                </div>
                <Typography variant="ParagraphL">{item.name}</Typography>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.formBlock}>
          {currentStep === 1 && <UserInfoBlock />}
          {currentStep === 2 && <BusinessInfoBlock />}
          {currentStep === 3 && <BusinessLocation />}
          {currentStep === 4 && <TermsAndConditions />}
        </div>
      </div>
    </div>
  )
}

export default SignUpMainComponent
