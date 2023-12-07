import { useForm } from 'react-hook-form'

import { ReactComponent as CheckCircle } from 'assets/icons/check-circle.svg'
import { FormController, Select, Typography } from 'components/share'

import styles from './PosSystem.module.scss'
import { stationTypes } from './PosSytem.constants'
import { TabContainer } from '../../Tabs'

const PosSystem = () => {
  const { control, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      stationType: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <TabContainer tittle="POS Systems(s)" onSubmit={handleSubmit(onSubmit)}>
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
            Verifone Commander
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
