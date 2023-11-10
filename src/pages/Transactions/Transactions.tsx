import { Button, MainLayout} from 'components/share'

import styles from './Transactions.module.scss'

const Transactions = () => (
  <div className={styles.main}>
    <MainLayout tittle='Transactions' adornment='1 location'>
      <div>
        <h2>Transactions</h2>
      </div>
    </MainLayout>
  </div>
)
export default Transactions
