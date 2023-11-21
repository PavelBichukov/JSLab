import { useEffect, useState } from 'react'

import { getBankAccounts } from 'src/api'

import styles from './ConnectBank.module.scss'
import {
  CreateBankAccount,
  SelectBankAccount,
  SelectConnectMethod,
} from './ConnectBankSubComponents'

export const ConnectBank = () => {
  const [bankAccounts, setStatus] = useState('')

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await getBankAccounts()
        const { status } = response && response.data
        if (status === 'TRUE') {
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
      {bankAccounts === 'no accounts' && <CreateBankAccount />}
      {bankAccounts === 'previous' && <SelectBankAccount />}
    </div>
  )
}

export default ConnectBank
