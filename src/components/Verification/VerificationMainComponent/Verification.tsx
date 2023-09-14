import { Typography } from 'components/share/Typography'
import { CodeEnterBlock, EmailBlock, SuccessBlock } from 'src/components'
import { IBenefitsList } from 'src/types/types'

import { benefitsLists } from './Verification.constants'
import styles from './Verification.module.scss'

export const VerificationMainComponent = () => {
  const currentStep = 3
  return (
    <div className={styles.container}>
      <div className={styles.verificationBlock}>
        <section className={styles.sideSection}>
          <button className={styles.backButton}>Back</button>
          <div className={styles.sideSectionText}>
            <Typography variant="HeaderM">Stations</Typography>
            <Typography
              variant="ParagraphL"
              className={styles.sideSectionDescription}
            >
              For organizations that want to grow their revenue by reducing
              credit card fees,while increasing traffic to their location.
            </Typography>
            <ul className={styles.benefitsList}>
              {benefitsLists.map((item: IBenefitsList) => (
                <Typography
                  variant="ParagraphL"
                  className={styles.listitem}
                  key={item.id}
                >
                  {item.name}
                </Typography>
              ))}
            </ul>
          </div>
        </section>
        <div className={styles.formBlock}>
          {currentStep === 1 && <EmailBlock />}
          {currentStep === 2 && <CodeEnterBlock />}
          {currentStep === 3 && <SuccessBlock />}
        </div>
      </div>
    </div>
  )
}

export default VerificationMainComponent
