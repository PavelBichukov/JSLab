import { Typography } from 'src/components/share/Typography'

import styles from './Verification.module.scss'

import { CodeEnterBlock, EmailBlock, SuccessBlock } from 'src/components'

import { IBenefitsList } from 'src/types/types'

const benefitsLists: IBenefitsList[] = [
  { id: 1, name: 'Grow your customer base' },
  { id: 2, name: 'Save on transactional fees' },
  { id: 3, name: 'Run custom promotions' },
  { id: 4, name: 'Get access to the latest tech' },
  { id: 5, name: 'Win your market' },
]

export const VerificationMainComponent = () => {
  const currentStep = 1
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
              {' '}
              For organizations that want to grow their revenue by reducing credit
              card fees,while increasing traffic to their location.
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
          {currentStep === 1 ? (
            <EmailBlock />
          ) : currentStep === 2 ? (
            <CodeEnterBlock />
          ) : (
            <SuccessBlock />
          )}
        </div>
      </div>
    </div>
  )
}

export default VerificationMainComponent
