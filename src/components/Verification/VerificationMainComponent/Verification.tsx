import { useState } from 'react'
import { Link } from 'react-router-dom'

import cn from 'classnames'
import { Typography } from 'components/share/Typography'
import { CodeEnterBlock, EmailBlock, SuccessBlock } from 'src/components'
import { IBenefitsList } from 'src/types/types'

import { benefitsLists } from './Verification.constants'
import styles from './Verification.module.scss'

export const VerificationMainComponent = () => {
  const [currentStep, setCurrenStep] = useState(1)

  return (
    <div className={styles.container}>
      <div className={styles.headerButtons}>
        <Link to="/" className={styles.closeIcon}>
          <button className={styles.headerButton}>Log In</button>
        </Link>
        <Link to="/" className={cn(styles.button, styles.buttonSignUp)}>
          <button className={cn(styles.headerButton, styles.signUpButton)}>
            Sign Up
          </button>
        </Link>
      </div>
      <div className={styles.verificationBlock}>
        <section className={styles.sideSection}>
          <Link to="/" className={styles.closeIcon}>
            <button className={styles.backButton}>Back</button>
          </Link>
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
            <div className={styles.buttonsBlock}>
              <button
                onClick={() =>
                  setCurrenStep(currentStep > 1 ? currentStep - 1 : currentStep)
                }
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrenStep(
                    currentStep >= 3 ? currentStep : currentStep + 1
                  )
                }
              >
                ›
              </button>
            </div>
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
