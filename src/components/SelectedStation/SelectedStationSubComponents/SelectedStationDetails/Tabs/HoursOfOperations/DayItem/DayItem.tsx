import cn from 'classnames'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox, FormController, Select, Typography } from 'components/share'

import { hoursOfOperationsAM, hoursOfOperationsPM } from './DayItem.constants'
import styles from './DayItem.module.scss'

export const DayItem = ({
  day,
  from,
  to,
  breakFrom,
  breakTo,
}: {
  day: string
  from: string
  to: string
  breakFrom: string
  breakTo: string
}) => {
  const [isChecked, setChecked] = useState(false)
  const [hasBreak, setHasBreak] = useState(false)

  const { control } = useFormContext()
  return (
    <div className={styles.main}>
      <div className={styles.dayToggle}>
        <Typography className={styles.day} variant="ParagraphL">
          {day}
        </Typography>
        <label className={styles.switch}>
          <input
            className={styles.input}
            type="checkbox"
            name="toggler"
            checked = {isChecked}
            onChange={() => setChecked(!isChecked)}
          />
          <div className={styles.toggleCircle}></div>
        </label>
        <Typography
          className={cn(styles.isOpen, { [styles.isOpenDisabled]: !isChecked })}
          variant="ParagraphL"
        >
          {!isChecked ? 'Closed' : 'Open'}
        </Typography>
      </div>
      {isChecked ? (
        <div className={styles.selectTime}>
          <FormController
            rootClassName={styles.select}
            name={from}
            control={control}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={hoursOfOperationsAM}
                placeholder="AM"
              />
            )}
          />
          <Typography className={styles.selectBetweenText} variant="ParagraphL">
            to
          </Typography>
          <FormController
            rootClassName={styles.select}
            name={to}
            control={control}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={hoursOfOperationsAM}
                placeholder="PM"
              />
            )}
          />
        </div>
      ) : (
        <div className={styles.selectTime}></div>
      )}
      {isChecked ? (
        <div className={styles.breakCheckBox}>
          <Checkbox
            id="breakCheckbox"
            onChange={() => setHasBreak(!hasBreak)}
            checked={hasBreak}
          />
          <Typography className="" variant="ParagraphL">
            Closed for break
          </Typography>
        </div>
      ) : (
        <div className={styles.breakCheckBox}></div>
      )}
      {hasBreak && isChecked ? (
        <div className={styles.selectTime}>
          <FormController
            rootClassName={styles.select}
            name={breakFrom}
            control={control}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={hoursOfOperationsPM}
                placeholder="AM"
              />
            )}
          />
          <Typography className={styles.selectBetweenText} variant="ParagraphL">
            to
          </Typography>
          <FormController
            rootClassName={styles.select}
            name={breakTo}
            control={control}
            render={({ field }: any) => (
              <Select
                {...field}
                ref={null}
                options={hoursOfOperationsPM}
                placeholder="PM"
              />
            )}
          />
        </div>
      ) : (
        <div className={styles.selectTime}></div>
      )}
    </div>
  )
}
