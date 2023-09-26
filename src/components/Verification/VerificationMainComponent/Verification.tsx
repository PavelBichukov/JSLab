import { useState } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from 'components/share/Typography'
import { CodeEnterBlock, EmailBlock, SuccessBlock } from 'src/components'

import { benefitsLists } from './Verification.constants'
import styles from './Verification.module.scss'
import Button from '../../share/Button/Button'

export const VerificationMainComponent = () => {
  const [currentStep, setCurrenStep] = useState(1)

  return (
    <div className={styles.container}>
      <div className={styles.headerButtons}>
        <Link to="/login">
          <Button
            className={styles.headerButton}
            type="button"
            size="small"
            mode="outlinedBlack"
            variant="primary"
            onClick={() => console.log('clicked')}
          >
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            className={styles.buttonSignUp}
            type="button"
            size="small"
            mode="defaultWhite"
            variant="primary"
            onClick={() => console.log('clicked')}
          >
            Sign up
          </Button>
        </Link>
      </div>
      <div className={styles.verificationBlock}>
        <section className={styles.sideSection}>
          <Link to="/">
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
              {benefitsLists.map((item) => (
                <li key={item.id} className={styles.cardListElement}>
                  <Typography variant="ParagraphL" className={styles.listitem}>
                    {item.name}
                  </Typography>
                </li>
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
