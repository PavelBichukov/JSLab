import { FormProvider, useForm, useFormState } from 'react-hook-form'

import { DayItem } from './DayItem/DayItem'
import { days, defaultValues } from './HoursOfOperations.constants'
import styles from './HoursOfOperations.module.scss'
import { TabContainer } from '../../Tabs'

const HoursOfOperations = () => {
  const methods = useForm({
    defaultValues: defaultValues,
  })

  const { control } = methods

  const { isDirty } = useFormState({ control })

  const onSubmit = (data: any) => {
    methods.reset({ ...data })
    console.log(data)
  }

  const onDiscard = () => methods.reset()

  return (
    <FormProvider {...methods}>
      <TabContainer
        tittle="Hours of Operation"
        onSubmit={methods.handleSubmit(onSubmit)}
        onDiscard={onDiscard}
        isDisabled={!isDirty}
      >
        <div className={styles.main}>
          {days.map((day) => (
            <DayItem key={day} day={day} />
          ))}
        </div>
      </TabContainer>
    </FormProvider>
  )
}

export default HoursOfOperations
