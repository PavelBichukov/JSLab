import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, FormController, Radio, Typography } from 'components/share'
import { addBankAccount, getBankAccounts } from 'src/api'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch, useAppSelector } from 'src/utils/redux-hooks/hooks'

import { IBankAccount } from './bankAccount.types'
import styles from './SelectBankAccount.module.scss'

export const SelectBankAccount = () => {
  const [accounts, setAccounts] = useState([] as IBankAccount[])

  const dispatch = useAppDispatch()

  const stationID = useAppSelector((state) => state.user.stationID)

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      radio: '',
    },
  })

  const onSubmit = async (data: any) => {
    console.log(data.radio)
    const selectedAccountID = accounts.find(
      (acc) => acc.accountNickname === data.radio
    )?.accountId
    console.log(selectedAccountID)
    try {
      const response = await addBankAccount({
        stationId: stationID,
        accountId: selectedAccountID,
      })
      const { status, message } = response && response.data
      if (status === 'UPDATED') {
        dispatch(setCurrentStep(ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM))
      } else {
        throw new Error(message)
      }
    } catch (error) {
      if (error.message === 'Empty id fields') {
        setError('root.serverError', {
          type: 'FAILED',
          message: 'Empty id fields',
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
    dispatch(setCurrentStep(ADD_STATION_STEPS.STATION_AMENITIES))
  }

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await getBankAccounts()
        const { status, data, message } = response && response.data
        if (status === 'TRUE') {
          setAccounts(data)
        } else {
          throw new Error(message)
        }
      } catch (error) {
        if (error.message === 'There are no bank accounts in the database') {
          setError('root.serverError', {
            type: 'FAILED',
            message: 'There are no bank accounts in the database',
          })
        } else {
          setError('root.serverError', {
            type: 'FAILED',
            message: 'Oops... Something go wrong',
          })
        }
      }
    }
    getAccounts()
  }, [])

  return (
    <div>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mainBlock}>
          <Typography variant="HeaderS" className={styles.tittle}>
            Select a Previous Account
          </Typography>
          {accounts?.map((acc) => (
            <div className={styles.accountBox} key={acc.accountId}>
              <FormController
                name="radio"
                control={control}
                rules={{
                  required: 'Verification Method is required!',
                }}
                render={({ field }: any) => (
                  <Radio
                    {...field}
                    ref={null}
                    labelText={`[${acc.accountNickname}]`}
                    value={acc.accountNickname}
                    subText={`[${acc.accountType}]`}
                  />
                )}
              />
              <Typography variant="LabelL" className={styles.accountNumber}>
                {`****${acc.accountNumber.substr(4)}`}
              </Typography>
            </div>
          ))}
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
    </div>
  )
}
