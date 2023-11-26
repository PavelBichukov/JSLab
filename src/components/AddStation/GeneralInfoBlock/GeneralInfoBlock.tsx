import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Button,
  FormController,
  Input,
  Map,
  Select,
  Typography,
} from 'components/share'
import { stateOptions } from 'components/SignUp/BusinessLocationBlock/BusinessLocation.constants'
import { loadOptions } from 'src/api'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { setCurrentStep } from 'src/store/signUp'
import { useAppDispatch } from 'src/utils/redux-hooks/hooks'

import { stationOptions } from './GeneralInfo.constants'
import styles from './GeneralInfo.module.scss'
import {
  IChildrenProps,
  IStation,
} from '../AddStationMainComponent/AddStation.types'

const GeneralInfoBlock = ({
  stationState,
  setStationState,
}: IChildrenProps) => {
  const dispatch = useAppDispatch()

  const [lat, setLat] = useState(53.88383)
  const [lng, setLng] = useState(27.5387)
  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      stationBrand: '',
      stationName: '',
      streetAddress: '',
      city: '',
      state: '' as any,
      zipCode: '',
      phoneNumber: '',
      emailAddress: '',
      latitude: lat,
      longitude: lng,
    },
  })

  const setValues = () => {
    const locationValue = getValues('streetAddress') as unknown as {
      value: string
      label: string
    }
    setValue('city', locationValue?.label?.split(', ')[2])
    setValue(
      'state',
      stateOptions.find(
        (option: { value: string; label: string }) =>
          option.value === locationValue?.label?.split(', ')[4]
      )
    )
    setValue('zipCode', locationValue?.label?.split(', ')[5])
  }

  const onSubmit = async (data: any) => {
    const {
      stationBrand: { value: stationBrand },
      stationName,
      latitude,
      longitude,
      phoneNumber,
      emailAddress,
    } = data

    setStationState((stationState: IStation) => ({
      ...stationState,
      stationBrand,
      stationName,
      latitude: latitude,
      longitude: longitude,
      phoneNumber,
      emailAddress,
    }))

    dispatch(setCurrentStep(ADD_STATION_STEPS.STATION_AMENITIES))
  }

  const onBack = () => {
    dispatch(setCurrentStep(ADD_STATION_STEPS.STATION_TYPE))
  }

  useEffect(() => {
    const {
      stationBrand,
      stationName,
      latitude,
      longitude,
      phoneNumber,
      emailAddress,
    } = stationState
    const setValues = () => {
      setValue('stationName', stationName)
      setValue('latitude', +latitude)
      setValue('longitude', +longitude)
      setValue('phoneNumber', phoneNumber)
      setValue('emailAddress', emailAddress)
      const brandOptions = stationOptions.find(
        (option: { value: string; label: string }) =>
          option.value === stationBrand
      )
      if (brandOptions !== undefined) {
        return setValue('stationBrand', brandOptions)
      }
    }
    if (stationName) {
      setValues()
    }
  }, [])
  return (
    <div>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mainBlock}>
          <Typography variant="HeaderS">General Information</Typography>
          <div className={styles.stationsDropDown}>
            <FormController
              name="stationBrand"
              control={control}
              rules={{
                required: 'Station Brand is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={stationOptions}
                  placeholder="Station Brand"
                />
              )}
            />
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
            <FormController
              name="streetAddress"
              control={control}
              rootClassName={styles.dropDownStreet}
              rules={{
                required: 'Street address is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  type="async"
                  searchable="true"
                  placeholder="Street Address"
                  loadOptions={debounce(loadOptions, 800)}
                  cacheOptions
                  onBlur={setValues()}
                  value={field.value}
                />
              )}
            />
            <Typography variant="HeaderXS" className={styles.headerEnter}>
              Enter Your Address Manually
            </Typography>
            <Typography variant="ParagraphS" className={styles.subTitle}>
              Move the map to change the coordinates OR sync with address
            </Typography>
            <Map lat={lat} lng={lng} setLat={setLat} setLng={setLng} />
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
            <FormController
              name="emailAddress"
              control={control}
              rules={{
                required: 'Email address is required!',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Invalid email address!',
                },
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
          </div>
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
            mode={isValid ? 'defaultBlack' : 'disabled'}
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

export default GeneralInfoBlock
