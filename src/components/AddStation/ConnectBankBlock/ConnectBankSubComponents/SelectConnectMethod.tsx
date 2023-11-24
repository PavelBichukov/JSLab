import { useState } from 'react'

import { Button, Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './SelectConnectMethod.module.scss'

export const SelectConnectMethod = ({ setMethod }: any) => {
  const [active, setActive] = useState('')

  const dispatch = useAppDispatch()

  const onBack = () => {
    dispatch(setCurrentStep(ADD_STATION_STEPS.STATION_AMENITIES))
  }

  return (
    <div className={styles.main}>
      <div className={styles.topButtonsBlock}>
        <Typography variant="HeaderS" className={styles.paymentMethod}>
          Connect your Bank
        </Typography>
        <Button
          type="button"
          className={
            active === 'previous'
              ? styles.buttonSelectActive
              : styles.buttonSelect
          }
          mode="whiteShadow"
          variant="secondary"
          size="large"
          onClick={() => setActive('previous')}
        >
          <Typography variant="LabelL" className={styles.buttonText}>
            Select a previously verified account
          </Typography>
        </Button>
        <Button
          type="button"
          className={
            active === 'no accounts'
              ? styles.buttonSelectActive
              : styles.buttonSelect
          }
          mode="whiteShadow"
          variant="secondary"
          size="large"
          onClick={() => setActive('no accounts')}
        >
          <Typography variant="LabelL" className={styles.buttonText}>
            Add a new account
          </Typography>
        </Button>
      </div>
      <div className={styles.bottomButtonsBlock}>
        <Button
          className={styles.buttonBack}
          type="button"
          mode="outlinedWhite"
          variant="primary"
          size="small"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          className={styles.buttonFinished}
          type="submit"
          mode={active ? 'defaultBlack' : 'disabled'}
          variant="primary"
          size="small"
          onClick={() => setMethod(active)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
