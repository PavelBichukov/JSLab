import { useEffect, useState } from 'react'

import { Button, Typography } from 'components/share'
import { getStationInfo } from 'src/api/api'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './Finalize.module.scss'

export const Finalize = () => {
  const [stationInfo, setStationInfo] = useState({
    stationBrand: '',
    stationName: '',
    merchantID: '',
    latitude: '',
    longitude: '',
  })

  const { stationBrand, stationName, merchantID, latitude, longitude } =
    stationInfo

  const stationID = useAppSelector((state) => state.user.stationID)

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await getStationInfo(stationID)
        const { status, data, message } = response && response.data
        if (status === 'UPDATED') {
          setStationInfo((stationInfo) => ({
            ...stationInfo,
            stationBrand: data.stationBrand,
            stationName: data.stationName,
            merchantID: data.stationId.slice(0, 5),
            latitude: data.latitude,
            longitude: data.longitude,
          }))
        } else {
          alert(message)
        }
      } catch (error) {
        alert('Oops... Something go wrong')
      }
    }
    getInfo()
  }, [])

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
            {`${stationBrand} Station - "${stationName}"`}
          </Typography>
        </div>
        <div className={styles.labelsContainer}>
          <div className={styles.labelContainer}>
            <Typography variant="LabelS" className={styles.labelTitle}>
              Merchant ID
            </Typography>
            <Typography variant="LabelL" className={styles.subLabelTitle}>
              {`SHEL - ${merchantID}`}
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
              {latitude}
            </Typography>
          </div>
          <div className={styles.labelContainer}>
            <Typography variant="LabelS" className={styles.labelTitle}>
              Longitude
            </Typography>
            <Typography variant="LabelL" className={styles.subLabelTitle}>
              {longitude}
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
