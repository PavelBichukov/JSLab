import { Button, MainLayout} from 'components/share'

import styles from './Payments.module.scss'

const Payments = () => (
  <div className={styles.main}>
    <MainLayout tittle='Payments' headerActions = {
      <Button mode='defaultBlack' variant='primary' size='small'>Test</Button>
    }>
      <div>
        <h2>Payments </h2>
      </div>
    </MainLayout>
  </div>
)
export default Payments 
