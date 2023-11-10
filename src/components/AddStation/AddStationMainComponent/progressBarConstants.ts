import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { IBenefitsList } from 'src/types/types'

export const progressBarConstants: IBenefitsList[] = [
  { key: ADD_STATION_STEPS.STATION_TYPE, name: 'Station Type' },
  { key: ADD_STATION_STEPS.GENERAL_INFORMATION, name: 'General Information' },
  { key: ADD_STATION_STEPS.STATION_AMENITIES, name: 'Station Amenities' },
  { key: ADD_STATION_STEPS.CONNECT_YOUR_BANK, name: 'Connect your Bank' },
  { key: ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM, name: 'Connect your System' },
  { key: ADD_STATION_STEPS.FINALIZE, name: 'Finalize' },
]
