import { FormProvider, useForm, useFormState } from 'react-hook-form'

import { updateHoursOfOperations } from 'src/api'

import { DayItem } from './DayItem/DayItem'
import { days, defaultValues } from './HoursOfOperations.constants'
import styles from './HoursOfOperations.module.scss'
import { IStation } from '../../../../SelectedStation.types'
import { TabContainer } from '../../Tabs'

const HoursOfOperations = ({ stationInfo }: { stationInfo: IStation }) => {
  const { hoursOfOperations, stationId } = stationInfo

  const getDefaultValues = () =>
    hoursOfOperations ? hoursOfOperations : defaultValues

  const formValues = getDefaultValues()

  const methods = useForm({
    defaultValues: formValues,
  })

  const { control } = methods

  const { isDirty } = useFormState({ control })

  const onSubmit = (data: any) => {
    methods.reset({ ...data })
    const updateInfo = async () => {
      try {
        const response = await updateHoursOfOperations({
          hoursOfOperations: data,
          id: stationId,
        })
        const { status, message } = response && response.data
        if (status === 'UPDATED') {
          console.log(message)
        } else {
          alert(message)
        }
      } catch (error) {
        alert('Oops... Something go wrong')
      }
    }
    updateInfo()
    console.log(formValues)
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
