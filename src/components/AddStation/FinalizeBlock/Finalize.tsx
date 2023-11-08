import { Button, Typography } from 'components/share'

import styles from './Finalize.module.scss'

export const Finalize = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <Typography variant="HeaderS">Complete Setup</Typography>
        <Typography variant="ParagraphL" className={styles.paragraph}>
          In order to complete the station setup, you must log into your POS
          system and go through the steps listed in the pdf. The following
          information will be needed to complete the setup process.
        </Typography>
        <div className={styles.labelContainer}>
          <Typography variant="LabelS" className={styles.labelTitle}>
            Station name
          </Typography>
          <Typography variant="LabelL" className={styles.subLabelTitle}>
            Shell Station #218
          </Typography>
        </div>
        <div className={styles.labelsContainer}>
          <div className={styles.labelContainer}>
            <Typography variant="LabelS" className={styles.labelTitle}>
              Merchant ID
            </Typography>
            <Typography variant="LabelL" className={styles.subLabelTitle}>
              SHEL - 0218
            </Typography>
          </div>
          <div className={styles.labelContainer}>
            <Typography variant="LabelS" className={styles.labelTitle}>
              Store ID
            </Typography>
            <Typography variant="LabelL" className={styles.subLabelTitle}>
              2023 - 0001
            </Typography>
          </div>
        </div>
        <div className={styles.labelsContainer}>
          <div className={styles.labelContainer}>
            <Typography variant="LabelS" className={styles.labelTitle}>
              Latitude
            </Typography>
            <Typography variant="LabelL" className={styles.subLabelTitle}>
              32.802774
            </Typography>
          </div>
          <div className={styles.labelContainer}>
            <Typography variant="LabelS" className={styles.labelTitle}>
              Longitude
            </Typography>
            <Typography variant="LabelL" className={styles.subLabelTitle}>
              -96.800143
            </Typography>
          </div>
        </div>
        <Typography variant="ParagraphM" className={styles.print}>
          Print
        </Typography>
        <Typography variant="ParagraphL" className={styles.secondParagraph}>
          Once you’ve completed the process, you will need to reboot your
          systems in order for the sync to take place.
        </Typography>
      </div>
      <Button
        type="button"
        mode="defaultBlack"
        variant="primary"
        size="large"
        className={styles.mainButton}
        onClick={() => console.log('click')}
      >
        Complete
      </Button>
    </div>
  )
}

export default Finalize
