import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  FormController,
  Input,
  Map,
  Select,
  Typography,
} from 'components/share'

import { stationOptions } from './GeneralInformation.constants'
import styles from './GeneralInformation.module.scss'
import { IStation } from '../../../../SelectedStation.types'
import { TabContainer } from '../../Tabs'

const GeneralInformation = ({ stationInfo }: { stationInfo: IStation }) => {
  const {
    stationBrand,
    stationName,
    phoneNumber,
    emailAddress,
    latitude,
    longitude,
  } = stationInfo
  const [lat, setLat] = useState(+latitude)
  const [lng, setLng] = useState(+longitude)

  const [addNumber, setAddNumber] = useState(false)
  const [addEmail, setAddEmail] = useState(false)

  const { control, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      stationBrand: {
        value: stationBrand || '',
        label: stationBrand || '',
      },
      stationName: stationName || '',
      phoneNumber: phoneNumber || '',
      additionalPhoneNumber: '',
      emailAddress: emailAddress || '',
      additionalEmailAddress: '',
    },
  })

  const handleAddNumber = () => {
    if (addNumber) {
      setValue('additionalPhoneNumber', '')
      setAddNumber(!addNumber)
    } else {
      setAddNumber(!addNumber)
    }
  }

  const handleAddEmail = () => {
    if (addEmail) {
      setValue('additionalEmailAddress', '')
      setAddEmail(!addEmail)
    } else {
      setAddEmail(!addEmail)
    }
  }

  const onSubmit = (data: any) => {
    if (
      stationBrand !== data.stationBrand.value ||
      stationName !== data.stationName ||
      phoneNumber !== data.phoneNumber ||
      emailAddress !== data.emailAddress ||
      data.additionalPhoneNumber ||
      data.additionalEmailAddress
    ) {
      console.log('there have been changes')
    } else {
      console.log('no changes')
    }
  }

  return (
    <TabContainer
      tittle="General Information"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.main}>
        <div className={styles.stationInfo}>
          <div className={styles.selectBox}>
            <Typography className={styles.label} variant="ParagraphS">
              Station Brand
            </Typography>
            <FormController
              rootClassName={styles.select}
              name="stationBrand"
              control={control}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={stationOptions}
                  placeholder="Station Brand"
                />
              )}
            />
          </div>
          <FormController
            name="stationName"
            control={control}
            rules={{
              required: 'Station Name is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Station Name"
                id="stationName"
              />
            )}
          />
          <div className={styles.infoBox}>
            <Typography className={styles.label} variant="ParagraphS">
              Merchant ID
            </Typography>
            <Typography className={styles.infoText} variant="ParagraphL">
              1537-2713
            </Typography>
          </div>
          <div className={styles.infoBox}>
            <Typography className={styles.label} variant="ParagraphS">
              Store ID
            </Typography>
            <Typography className={styles.infoText} variant="ParagraphL">
              1537-2713
            </Typography>
          </div>
        </div>
        <div className={styles.stationContacts}>
          <FormController
            name="phoneNumber"
            control={control}
            rules={{
              required: 'Phone Number is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Phone Number"
                id="phoneNumber"
              />
            )}
          />
          {addNumber && (
            <FormController
              name="additionalPhoneNumber"
              control={control}
              rules={{
                required: 'Phone Number is required!',
              }}
              render={({ field }: any) => (
                <Input
                  {...field}
                  ref={null}
                  variant="text"
                  label="Additional Phone Number"
                  id="additionalPhoneNumber"
                />
              )}
            />
          )}
          <Typography
            className={styles.addButton}
            variant="ParagraphS"
            onClick={handleAddNumber}
          >
            {!addNumber ? 'Add a phone number' : 'Remove additional number'}
          </Typography>
          <FormController
            name="emailAddress"
            control={control}
            rules={{
              required: 'Email Address is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="email"
                label="Email Address"
                id="emailAddress"
              />
            )}
          />
          {addEmail && (
            <FormController
              name="additionalEmailAddress"
              control={control}
              rules={{
                required: 'Email Address is required!',
              }}
              render={({ field }: any) => (
                <Input
                  {...field}
                  ref={null}
                  variant="email"
                  label="Additional Email Address"
                  id="additionalEmailAddress"
                />
              )}
            />
          )}
          <Typography
            className={styles.addButton}
            variant="ParagraphS"
            onClick={handleAddEmail}
          >
            {!addEmail ? 'Add an email address' : 'Remove additional email'}
          </Typography>
        </div>
        <div className={styles.map}>
          <Map lat={lat} lng={lng} setLat={setLat} setLng={setLng} />
        </div>
        <div className={styles.stationAddress}>
          <div className={styles.infoBox}>
            <Typography className={styles.label} variant="ParagraphS">
              Street Address
            </Typography>
            <Typography className={styles.infoText} variant="ParagraphL">
              3128 Mckinney Ave
            </Typography>
          </div>
          <div className={styles.infoBox}>
            <Typography className={styles.label} variant="ParagraphS">
              Secondary Address (Optional)
            </Typography>
            <Typography className={styles.infoText} variant="ParagraphL">
              Suite A
            </Typography>
          </div>
          <div className={styles.cityState}>
            <div className={styles.infoBox}>
              <Typography className={styles.label} variant="ParagraphS">
                City
              </Typography>
              <Typography className={styles.infoText} variant="ParagraphL">
                Dallas
              </Typography>
            </div>
            <div className={styles.infoBox}>
              <Typography className={styles.label} variant="ParagraphS">
                ST
              </Typography>
              <Typography className={styles.infoText} variant="ParagraphL">
                Texas
              </Typography>
            </div>
          </div>
          <div className={styles.infoBox}>
            <Typography className={styles.label} variant="ParagraphS">
              Zip
            </Typography>
            <Typography className={styles.infoText} variant="ParagraphL">
              75204-2465
            </Typography>
          </div>
          <div className={styles.longLat}>
            <div className={styles.infoBox}>
              <Typography className={styles.label} variant="ParagraphS">
                Latitiude
              </Typography>
              <Typography className={styles.infoText} variant="ParagraphL">
                32.802774
              </Typography>
            </div>
            <div className={styles.infoBox}>
              <Typography className={styles.label} variant="ParagraphS">
                Longitude
              </Typography>
              <Typography className={styles.infoText} variant="ParagraphL">
                -96.800143
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </TabContainer>
  )
}

export default GeneralInformation
