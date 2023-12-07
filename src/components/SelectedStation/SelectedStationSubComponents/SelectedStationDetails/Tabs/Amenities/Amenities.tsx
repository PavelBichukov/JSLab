import { useEffect, useState } from 'react'

import { Checkbox, Typography } from 'components/share'

import {
  stationAmenitiesLeft,
  stationAmenitiesRight,
  subStoreAmenities,
} from './Amenities.constants'
import styles from './Amenities.module.scss'
import { IStation } from '../../../../SelectedStation.types'
import { TabContainer } from '../../Tabs'

const Amenities = ({ stationInfo }: { stationInfo: IStation }) => {
  const { stationAmenities } = stationInfo
  const [perks, setPerks] = useState<string[]>([])

  const [check, setCheck] = useState(false)

  const handleCbClick = (e: any) => {
    const { checked, name } = e.target
    if (checked) {
      setPerks([...perks, name])
    } else {
      setPerks([...perks.filter((selectedName) => selectedName != name)])
    }
  }

  const isDisabled = () => {
    if (perks.length) {
      if (perks.sort().toString() === stationAmenities.sort().toString()) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(perks)
  }

  useEffect(() => {
    if (stationAmenities.length) {
      setPerks(stationAmenities)
      setCheck(true)
    }
  }, [])

  return (
    <TabContainer
      tittle="Amenities"
      onSubmit={onSubmit}
      isDisabled={isDisabled()}
    >
      <div className={styles.main}>
        <div className={styles.subAmenitiesBlock}>
          <div className={styles.checkBox}>
            <Checkbox
              ref={null}
              id="termsCheckBox"
              name="Convenient Store"
              onClick={() => setCheck(!check)}
              onChange={handleCbClick}
              checked={perks.includes('Convenient Store')}
            />
            <Typography variant="ParagraphL" className={styles.checkBoxTittle}>
              Convenient Store
            </Typography>
          </div>
          <div className={styles.subAmenities}>
            {subStoreAmenities.map((subStoreAmenity) => (
              <div key={subStoreAmenity.value} className={styles.checkBox}>
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
                      ? styles.checkBoxTittle
                      : styles.checkBoxTittleDisabled
                  }
                >
                  {subStoreAmenity.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.basicAmenitiesBlock}>
          <div className={styles.amenitiesBlock}>
            {stationAmenitiesLeft.map((stationAmenity) => (
              <div key={stationAmenity.value} className={styles.checkBox}>
                <Checkbox
                  ref={null}
                  id="termsCheckBox"
                  name={stationAmenity.value}
                  onChange={handleCbClick}
                  checked={perks.includes(stationAmenity.value)}
                />
                <Typography
                  variant="ParagraphL"
                  className={styles.checkBoxTittle}
                >
                  {stationAmenity.label}
                </Typography>
              </div>
            ))}
          </div>
          <div className={styles.amenitiesBlock}>
            {stationAmenitiesRight.map((stationAmenity) => (
              <div key={stationAmenity.value} className={styles.checkBox}>
                <Checkbox
                  ref={null}
                  id="termsCheckBox"
                  name={stationAmenity.value}
                  onChange={handleCbClick}
                  checked={perks.includes(stationAmenity.value)}
                />
                <Typography
                  variant="ParagraphL"
                  className={styles.checkBoxTittle}
                >
                  {stationAmenity.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TabContainer>
  )
}

export default Amenities
