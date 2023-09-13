import { Typography } from 'src/components/share/Typography'

import { progressBarConstants } from './progressBarConstants'
import styles from './SignUpMainComponent.module.scss'

export const SignUpMainComponent = () => {
  const currenStep = 2

  return (
    <div className={styles.container}>
      <div className={styles.signUpBlock}>
        <section className={styles.sideSection}>
          <div className={styles.progressBar}>
            {progressBarConstants.map((item) => (
              <div
                className={
                  currenStep >= item.id
                    ? styles.progressBarItemActive
                    : styles.progressBarItem
                }
                key={item.id}
              >
                <div
                  className={
                    currenStep >= item.id
                      ? styles.circleNumberActive
                      : styles.circleNumber
                  }
                >
                  <Typography variant="LabelL">{item.id}</Typography>
                </div>
                <Typography variant="ParagraphL">{item.name}</Typography>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.formBlock}></div>
      </div>
    </div>
  )
}

export default SignUpMainComponent
