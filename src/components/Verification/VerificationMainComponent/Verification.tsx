import { Link } from 'react-router-dom'

import { Button, Typography } from 'components/share'
import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { CodeEnterBlock, EmailBlock, SuccessBlock } from 'src/components'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import { benefitsLists } from './Verification.constants'
import styles from './Verification.module.scss'

const _renderStep = (step: string) => {
  switch (step) {
    case SIGN_UP_STEPS.EMAIL: {
      return <EmailBlock />
    }
    case SIGN_UP_STEPS.OTP_CODE: {
      return <CodeEnterBlock />
    }
    case SIGN_UP_STEPS.SUCCESS: {
      return <SuccessBlock />
    }
    default:
    <></>
  }
}

export const VerificationMainComponent = () => {
  const currentStep = useAppSelector((state) => state.signUpStep.currentStep)

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
                <li key={item.key} className={styles.cardListElement}>
                  <Typography variant="ParagraphL" className={styles.listitem}>
                    {item.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className={styles.formBlock}>
          {_renderStep(currentStep)}
        </div>
      </div>
    </div>
  )
}

export default VerificationMainComponent
