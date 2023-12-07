import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { ReactComponent as CheckCircle } from 'assets/icons/check-circle.svg'
import { FormController, Select, Typography } from 'components/share'

import { stationTypes } from './PosSystem.constants'
import styles from './PosSystem.module.scss'
import { IStation } from '../../../../SelectedStation.types'
import { TabContainer } from '../../Tabs'

const PosSystem = ({ stationInfo }: { stationInfo: IStation }) => {
  const { posSystem, stationType } = stationInfo

  const { control, getValues, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      stationType: {
        value: '',
        label: '',
      },
    },
  })

  const onSubmit = (data: any) => {
    if (getValues().stationType.value === stationType) {
      console.log('no changes')
    } else {
      console.log('has changes')
    }
    console.log(data)
  }

  useEffect(() => {
    const setValues = () => {
      const stationOption = stationTypes.find(
        (option: { value: string; label: string }) =>
          option.value === stationType
      )
      if (stationOption !== undefined) {
        return setValue('stationType', stationOption)
      }
    }
    if (stationType) {
      setValues()
    }
  }, [])

  return (
    <TabContainer
      tittle="POS Systems(s)"
      onSubmit={handleSubmit(onSubmit)}
      isDisabled={false}
    >
      <div className={styles.main}>
        <div className={styles.infoColumn}>
          <Typography className={styles.selectTittle} variant="ParagraphS">
            Used for
          </Typography>
          <FormController
            name="stationType"
            control={control}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={stationTypes}
                placeholder="Station Type"
              />
            )}
          />
        </div>
        <div className={styles.infoColumn}>
          <Typography className={styles.infoTittle} variant="ParagraphS">
            System
          </Typography>
          <Typography className={styles.infoText} variant="ParagraphL">
            {posSystem}
          </Typography>
        </div>
        <div className={styles.infoColumn}>
          <Typography className={styles.support} variant="ParagraphS">
            Download Instructions
          </Typography>
        </div>
        <div className={styles.statusBox}>
          <CheckCircle />
          <Typography className={styles.statusText} variant="LabelM">
            Connected
          </Typography>
        </div>
      </div>
      <Typography className={styles.support} variant="ParagraphS">
        Need Support?
      </Typography>
    </TabContainer>
  )
}

export default PosSystem
