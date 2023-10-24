import { useForm } from 'react-hook-form'

import { paymentMethods } from 'components/AddStation/ConnectBankBlock/ConnectBank.constants'
import {
  Button,
  FormController,
  Radio,
  Select,
  Typography,
} from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import styles from './ConnectBank.module.scss'

export const ConnectBank = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      paymentMethod: '',
      instant: '',
    },
  })

  const onSubmit = () => {
    console.log('Next')
    dispatch(setCurrentStep(ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM))
  }
  return (
    <div>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mainBlock}>
          <Typography variant="HeaderS" className={styles.paymentMethod}>
            Choose Payment Method
          </Typography>
          <div className={styles.stationsDropDown}>
            <FormController
              name="paymentMethod"
              control={control}
              rules={{
                required: 'Payment Method is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={paymentMethods}
                  placeholder="Payment Method"
                />
              )}
            />
            <Typography variant="HeaderS" className={styles.titleSelect}>
              Select Verification Method
            </Typography>
          </div>
          <FormController
            name="instant"
            control={control}
            rules={{
              required: 'Verification Method is required!',
            }}
            render={({ field }: any) => (
              <Radio
                {...field}
                ref={null}
                labelText="Instant Verification"
                subText="We will connect you account instantly with Plaid."
              />
            )}
          />
          <FormController
            name="manual"
            control={control}
            rules={{
              required: 'Verification Method is required!',
            }}
            render={({ field }: any) => (
              <Radio
                {...field}
                ref={null}
                labelText="Manual Verification"
                subText="Use your bank’s routing number and account number. May take up to 3 business days."
              />
            )}
          />
        </div>
        <div className={styles.buttonsBlock}>
          <Button
            className={styles.buttonBack}
            type="button"
            mode="outlinedWhite"
            variant="primary"
            size="small"
            onClick={() =>
              dispatch(setCurrentStep(ADD_STATION_STEPS.STATION_AMENITIES))
            }
          >
            Back
          </Button>
          <Button
            className={styles.buttonFinished}
            type="submit"
            mode={isValid ? 'defaultBlack' : 'disabled'}
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ConnectBank
