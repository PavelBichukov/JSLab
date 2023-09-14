import cn from 'classnames'
import { TermsAndConditions, UserInfoBlock } from 'src/components'
import { Typography } from 'src/components/share/Typography'

import { progressBarConstants } from './progressBarConstants'
import styles from './SignUpMainComponent.module.scss'

export const SignUpMainComponent = () => {
  const currentStep = 2

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
          {/* <UserInfoBlock/> */}
          <TermsAndConditions/>
        </div>
      </div>
    </div>
  )
}

export default SignUpMainComponent
