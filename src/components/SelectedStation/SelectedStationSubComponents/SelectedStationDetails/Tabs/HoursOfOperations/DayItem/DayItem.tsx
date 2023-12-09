import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox, FormController, Select, Typography } from 'components/share'

import { hoursOfOperationsAM, hoursOfOperationsPM } from './DayItem.constants'
import styles from './DayItem.module.scss'

export const DayItem = ({ day }: { day: string }) => {
  const { control, getValues } = useFormContext()

  const { isOpen, hasBreak: isBreak } = getValues(day)

  const [isChecked, setChecked] = useState(isOpen)
  const [hasBreak, setHasBreak] = useState(isBreak)

  useEffect(() => {
    setChecked(isOpen)
  }, [isOpen])

  return (
    <div className={styles.main}>
      <div className={styles.dayToggle}>
        <Typography className={styles.day} variant="ParagraphL">
          {day}
        </Typography>
        <FormController
          rootClassName={styles.select}
          name={`${day}.isOpen`}
          control={control}
          render={({ field }: any) => (
            <label className={styles.switch}>
              <input
                {...field}
                className={styles.input}
                type="checkbox"
                name="toggler"
                checked={field.value}
                onClick={() => setChecked(!field.value)}
              />
              <div className={styles.toggleCircle}></div>
            </label>
          )}
        />
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
            name={`${day}.from`}
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
            name={`${day}.to`}
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
          <FormController
            rootClassName={styles.select}
            name={`${day}.hasBreak`}
            control={control}
            render={({ field }: any) => (
              <Checkbox
                {...field}
                id="breakCheckbox"
                checked={field.value}
                onClick={() => setHasBreak(!field.value)}
              />
            )}
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
            name={`${day}.breakFrom`}
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
            name={`${day}.breakTo`}
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
