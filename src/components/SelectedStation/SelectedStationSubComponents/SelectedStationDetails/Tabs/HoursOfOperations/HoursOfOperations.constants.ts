import {
  hoursOfOperationsAM,
  hoursOfOperationsPM,
} from '../HoursOfOperations/DayItem/DayItem.constants'

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const defaultValues = days.reduce((acc, item) => {
  return {
    ...acc,
    [item]: {
      isOpen: false,
      from: hoursOfOperationsAM[5],
      to: hoursOfOperationsAM[11],
      hasBreak: false,
      breakFrom: hoursOfOperationsPM[11],
      breakTo: hoursOfOperationsPM[0],
    },
  }
}, {})