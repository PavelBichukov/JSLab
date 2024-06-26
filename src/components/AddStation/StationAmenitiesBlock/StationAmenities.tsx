import { useEffect, useState } from 'react'

import { Button, Checkbox, Typography } from 'components/share'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import {
  stationAmenities,
  subStoreAmenities,
} from './StationAmenities.constants'
import styles from './StationAmenities.module.scss'
import {
  IChildrenProps,
  IStation,
} from '../AddStationMainComponent/AddStation.types'

export const StationAmenities = ({
  stationState,
  setStationState,
}: IChildrenProps) => {
  const [perks, setPerks] = useState<string[]>([])
  const [check, setCheck] = useState(false)
  const dispatch = useAppDispatch()

  const handleCbClick = (ev: any) => {
    const { checked, name } = ev.target
    if (checked) {
      setPerks([...perks, name])
    } else {
      setPerks([...perks.filter((selectedName) => selectedName != name)])
    }
  }

  const onBack = () => {
    dispatch(setCurrentStep(ADD_STATION_STEPS.GENERAL_INFORMATION))
  }

  const onNext = async (e: any) => {
    e.preventDefault()
    setStationState((stationState: IStation) => ({
      ...stationState,
      stationAmenities: perks,
    }))
    dispatch(setCurrentStep(ADD_STATION_STEPS.CONNECT_YOUR_BANK))
  }

  useEffect(() => {
    const { stationAmenities } = stationState
    if (stationAmenities.length) {
      setPerks(stationAmenities)
      setCheck(true)
    }
  }, [])

  return (
    <div>
      <form onSubmit={onNext}>
        <div className={styles.mainContainer}>
          <Typography variant="HeaderS">Station Amenities</Typography>
          <div className={styles.labelBlock}>
            <Checkbox
              ref={null}
              id="termsCheckBox"
              name="Convenient Store"
              onClick={() => setCheck(!check)}
              onChange={handleCbClick}
              checked={perks.includes('Convenient Store')}
            />
            <Typography variant="ParagraphL" className={styles.paragraphLabel}>
              Convenient Store
            </Typography>
          </div>
          <div className={styles.subDiv}>
            {subStoreAmenities.map((subStoreAmenity) => (
              <div key={subStoreAmenity.value} className={styles.subLabelBlock}>
                <Checkbox
                  ref={null}
                  id="termsCheckBox"
                  name={subStoreAmenity.value}
                  onChange={handleCbClick}
                  disabled={!check}
                  checked={perks.includes(subStoreAmenity.value)}
                />
                <Typography
                  variant="ParagraphL"
                  className={
                    check
                      ? styles.paragraphLabel
                      : styles.paragraphLabelDisabled
                  }
                >
                  {subStoreAmenity.label}
                </Typography>
              </div>
            ))}
          </div>
          {stationAmenities.map((stationAmenity) => (
            <div key={stationAmenity.value} className={styles.labelBlock}>
              <Checkbox
                ref={null}
                id="termsCheckBox"
                name={stationAmenity.value}
                onChange={handleCbClick}
                checked={perks.includes(stationAmenity.value)}
              />
              <Typography
                variant="ParagraphL"
                className={styles.paragraphLabel}
              >
                {stationAmenity.label}
              </Typography>
            </div>
          ))}
        </div>
        <div className={styles.buttonsBlock}>
          <Button
            className={styles.buttonBack}
            type="button"
            mode="outlinedWhite"
            variant="primary"
            size="small"
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            className={styles.buttonFinished}
            type="submit"
            mode={perks.length > 0 ? 'defaultBlack' : 'disabled'}
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

export default StationAmenities
