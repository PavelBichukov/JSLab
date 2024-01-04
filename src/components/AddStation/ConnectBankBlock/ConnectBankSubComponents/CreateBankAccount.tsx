import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  Button,
  FormController,
  Input,
  Radio,
  Select,
  Typography,
} from 'components/share'
import { createBankAccount } from 'src/api'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import { accountTypes, paymentMethods } from './CreateBankAccount.constants'
import styles from './CreateBankAccount.module.scss'
import { IStation } from '../../AddStationMainComponent/AddStation.types'

export const CreateBankAccount = ({
  method,
  setMethod,
  stationState,
  setStationState,
}: {
  method: boolean
  setMethod: (value: string) => void
  stationState: IStation
  setStationState: (prev: (value: IStation) => IStation) => void
}) => {
  const dispatch = useAppDispatch()

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      paymentMethod: '',
      verificationMethod: '',
      accountNickname: '',
      accountType: '',
      routingNumber: '',
      accountNumber: '',
    },
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await createBankAccount({
        ...data,
      })
      const { status, message, accountId } = response && response.data
      if (status === 'UPDATED') {
        setStationState((stationState: IStation) => ({
          ...stationState,
          ...data,
          bankAccountId: accountId,
        }))
        dispatch(setCurrentStep(ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM))
      } else {
        throw new Error(message)
      }
    } catch (error) {
      if (error.message === 'Empty payment method fields') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Empty payment method fields',
        })
      } else {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Oops... Something go wrong',
        })
      }
    }
  }

  const onBack = () => {
    if (method) {
      setMethod('select method')
    } else {
      dispatch(setCurrentStep(ADD_STATION_STEPS.STATION_AMENITIES))
    }
  }

  useEffect(() => {
    const {
      paymentMethod,
      accountNickname,
      accountType,
      routingNumber,
      accountNumber,
    } = stationState

    const setValues = () => {
      setValue('accountNickname', accountNickname)
      setValue('routingNumber', routingNumber)
      setValue('accountNumber', accountNumber)
      const paymentMethodOption = paymentMethods.find(
        (option: { value: string; label: string }) =>
          option.value === paymentMethod.value
      )
      if (paymentMethodOption !== undefined) {
        setValue('paymentMethod', paymentMethodOption)
      }
      const accountTypeOption = accountTypes.find(
        (option: { value: string; label: string }) =>
          option.value === accountType.value
      )
      if (accountTypeOption !== undefined) {
        setValue('accountType', accountTypeOption)
      }
    }
    if (accountNickname) {
      setValues()
    }
  }, [])

  return (
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
          name="verificationMethod"
          control={control}
          rules={{
            required: 'Verification Method is required!',
          }}
          render={({ field }: any) => (
            <Radio
              {...field}
              ref={null}
              labelText="Instant Verification"
              value={'instant'}
              subText="We will connect you account instantly with Plaid."
            />
          )}
        />
        <FormController
          name="verificationMethod"
          control={control}
          rules={{
            required: 'Verification Method is required!',
          }}
          render={({ field }: any) => (
            <Radio
              {...field}
              ref={field.ref}
              labelText="Manual Verification"
              value={'manual'}
              subText="Use your bank’s routing number and account number. May take up to 3 business days."
            />
          )}
        />
        <div className={styles.underSelectPart}>
          <Typography variant="HeaderS" className={styles.titleEnter}>
            Enter Your Bank Information
          </Typography>
          <FormController
            name="accountNickname"
            control={control}
            rootClassName={styles.accountNickname}
            rules={{
              required: 'Account Nickname is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Account Nickname"
                id="accountNickname"
              />
            )}
          />
          <FormController
            name="accountType"
            control={control}
            rules={{
              required: 'Account Type is required!',
            }}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={accountTypes}
                placeholder="Account Type"
              />
            )}
          />
          <FormController
            name="routingNumber"
            control={control}
            rootClassName={styles.routingNumber}
            rules={{
              required: 'Routing Number is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="password"
                label="Routing Number"
                id="routingNumber"
              />
            )}
          />
          <FormController
            name="accountNumber"
            control={control}
            rules={{
              required: 'Account Number is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="password"
                label="Account Number"
                id="accountNumber"
              />
            )}
          />
          <div className={styles.infoContainer}>
            <img
              src="src/assets/icons/info.png"
              alt="info"
              width="24"
              height="24"
            />
            <Typography variant="ParagraphS" className={styles.infoText}>
              In order for your account to be active, a bank account must be
              verified. You will receive 2 deposits into the account specified.
              Upon receipt - enter these values into your station details.
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.buttonsBlock}>
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
          mode={isValid ? 'defaultBlack' : 'disabled'}
          variant="primary"
          size="small"
        >
          Next
        </Button>
      </div>
    </form>
  )
}
