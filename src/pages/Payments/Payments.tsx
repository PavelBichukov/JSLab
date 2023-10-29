import { Button, MainLayout } from 'components/share'

import styles from './Payments.module.scss'

const Payments = () => (
  <div className={styles.main}>
    <MainLayout
      title="Payments"
      headerActions={
        <Button
          type="button"
          size="small"
          mode="defaultBlack"
          variant="primary"
          className={styles.buttonMain}
          onClick={() => console.log('click')}
        >
          Test
        </Button>
      }
    >
      <div>
        <h2>Payments </h2>
      </div>
    </MainLayout>
  </div>
)
export default Payments 
