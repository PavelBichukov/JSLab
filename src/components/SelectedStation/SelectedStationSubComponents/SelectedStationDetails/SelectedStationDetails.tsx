import styles from './SelectedStationDetails.module.scss'
import {
  Amenities,
  BankingInformation,
  GeneralInformation,
  HoursOfOperations,
  PosSystem,
} from './Tabs'
import { IStation } from '../../SelectedStation.types'

const SelectedStationDetails = ({ stationInfo }: { stationInfo: IStation }) => {
  return (
    <div className={styles.container}>
      <GeneralInformation stationInfo={stationInfo}/>
      <BankingInformation stationInfo={stationInfo}/>
      <Amenities stationInfo={stationInfo}/>
      <PosSystem stationInfo={stationInfo}/>
      <HoursOfOperations />
    </div>
  )
}

export default SelectedStationDetails
