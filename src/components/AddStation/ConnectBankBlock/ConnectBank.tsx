import { useEffect, useState } from 'react'

import { getBankAccounts } from 'src/api'

import styles from './ConnectBank.module.scss'
import {
  CreateBankAccount,
  SelectBankAccount,
  SelectConnectMethod,
} from './ConnectBankSubComponents'
import { IChildrenProps } from '../AddStationMainComponent/AddStation.types'

export const ConnectBank = ({
  stationState,
  setStationState,
}: IChildrenProps) => {
  const [bankAccounts, setStatus] = useState('')

  const [isAnyAccounts, setState] = useState(false)

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await getBankAccounts()
        const { status } = response && response.data
        if (status === 'TRUE') {
          setState(true)
          setStatus('has accounts')
        } else {
          setStatus('no accounts')
        }
      } catch (error) {
        alert('Oops... Something go wrong')
      }
    }
    getAccounts()
  }, [])

  return (
    <div className={styles.main}>
      {bankAccounts === 'has accounts' && (
        <SelectConnectMethod setMethod={setStatus} />
      )}
      {bankAccounts === 'select method' && (
        <SelectConnectMethod setMethod={setStatus} />
      )}
      {bankAccounts === 'no accounts' && (
        <CreateBankAccount
          setMethod={setStatus}
          method={isAnyAccounts}
          stationState={stationState}
          setStationState={setStationState}
        />
      )}
      {bankAccounts === 'previous' && (
        <SelectBankAccount
          setMethod={setStatus}
          setStationState={setStationState}
        />
      )}
    </div>
  )
}

export default ConnectBank
