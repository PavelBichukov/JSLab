import { FormProvider, useForm } from 'react-hook-form'

import { DayItem } from './DayItem/DayItem'
import { daysConstants } from './HoursOfOperations.constants'
import styles from './HoursOfOperations.module.scss'
import { TabContainer } from '../../Tabs'
import {
  hoursOfOperationsAM,
  hoursOfOperationsPM,
} from '../HoursOfOperations/DayItem/DayItem.constants'

const HoursOfOperations = () => {
  const methods = useForm({
    defaultValues: {
      sundayFrom: hoursOfOperationsAM[5],
      sundayTo: hoursOfOperationsAM[11],
      sundayBreakFrom: hoursOfOperationsPM[11],
      sundayBreakTo: hoursOfOperationsPM[0],

      mondayFrom: hoursOfOperationsAM[5],
      mondayTo: hoursOfOperationsAM[11],
      mondayBreakFrom: hoursOfOperationsPM[11],
      mondayBreakTo: hoursOfOperationsPM[0],

      tuesdayFrom: hoursOfOperationsAM[5],
      tuesdayTo: hoursOfOperationsAM[11],
      tuesdayBreakFrom: hoursOfOperationsPM[11],
      tuesdayBreakTo: hoursOfOperationsPM[0],

      wednesdayFrom: hoursOfOperationsAM[5],
      wednesdayTo: hoursOfOperationsAM[11],
      wednesdayBreakFrom: hoursOfOperationsPM[11],
      wednesdayBreakTo: hoursOfOperationsPM[0],

      thursdayFrom: hoursOfOperationsAM[5],
      thursdayTo: hoursOfOperationsAM[11],
      thursdayBreakFrom: hoursOfOperationsPM[11],
      thursdayBreakTo: hoursOfOperationsPM[0],

      fridayFrom: hoursOfOperationsAM[5],
      fridayTo: hoursOfOperationsAM[11],
      fridayBreakFrom: hoursOfOperationsPM[11],
      fridayBreakTo: hoursOfOperationsPM[0],

      saturdayFrom: hoursOfOperationsAM[5],
      saturdayTo: hoursOfOperationsAM[11],
      saturdayBreakFrom: hoursOfOperationsPM[11],
      saturdayBreakTo: hoursOfOperationsPM[0],
    },
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <FormProvider {...methods}>
      <TabContainer
        tittle="Hours of Operation"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.main}>
          {daysConstants.map((item) => (
            <DayItem
              key={item.day}
              day={item.day}
              from={item.controlName.from}
              to={item.controlName.to}
              breakFrom={item.controlName.breakFrom}
              breakTo={item.controlName.breakTo}
            />
          ))}
        </div>
      </TabContainer>
    </FormProvider>
  )
}

export default HoursOfOperations
