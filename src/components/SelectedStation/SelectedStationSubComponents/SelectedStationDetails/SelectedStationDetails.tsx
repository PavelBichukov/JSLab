import styles from './SelectedStationDetails.module.scss'
import {
  Amenities,
  BankingInformation,
  GeneralInformation,
  HoursOfOperations,
  PosSystem,
} from './Tabs'

const SelectedStationDetails = () => {
  return (
    <div className={styles.container}>
      <GeneralInformation />
      <BankingInformation />
      <Amenities />
      <PosSystem />
      <HoursOfOperations />
    </div>
  )
}

export default SelectedStationDetails
