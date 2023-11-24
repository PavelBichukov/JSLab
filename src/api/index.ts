import axios from 'axios'

export const verifyOTP = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/verification/verifyOTP`,
    data
  )
}

export const signUpEmail = async (data: any) => {
  return await axios.post(`${import.meta.env.VITE_HOST_DEV}/signup`, data)
}

export const signUpContinue = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/signup/continue`,
    data
  )
}

export const signUpBusiness = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/signup/business`,
    data
  )
}

export const signUpLocation = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/signup/location`,
    data
  )
}

export const login = async (data: any) => {
  return await axios.post(`${import.meta.env.VITE_HOST_DEV}/login`, data)
}

export const loadOptions = (
  inputValue: string,
  callback: (options: { value: string; label: string }[]) => void
) => {
  axios
    .get(`https://geocode.maps.co/search?q=${inputValue}`)
    .then((data) => {
      if (data.status === 503) {
        alert(
          'The server is currently overloaded, please try again in 40 seconds'
        )
      } else {
        const options = [] as { value: string; label: string }[]
        data.data.forEach((item: { display_name: string }) =>
          options.push({
            value: item.display_name.split(',')[0],
            label: item.display_name,
          })
        )
        callback(options)
      }
    })
    .catch((error) => {
      alert(error.message)
    })
}

export const addStation = async (data: {
  stationType: string
  userEmail: string
}) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/addStation/stationType`,
    data
  )
}

export const addStationGeneralInformation = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/addStation/stationGeneralInfo`,
    data
  )
}

export const addStationAmenities = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/addStation/stationAmenities`,
    data
  )
}

export const createBankAccount = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/addBankAccount/createBankAccount`,
    data
  )
}

export const addBankAccount = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/addStation/addBankAccount`,
    data
  )
}

export const addStationPOSSystem = async (data: any) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/addStation/stationPOSSystem`,
    data
  )
}

export const getStationInfo = async (data: any) => {
  return await axios.get(
    `${import.meta.env.VITE_HOST_DEV}/addStation/getStationInfo/?id=${data}`
  )
}

export const getBankAccounts = async () => {
  return await axios.get(
    `${import.meta.env.VITE_HOST_DEV}/addBankAccount/getBankAccounts`
  )
}

export const getAllStations = async (data: any) => {
  return await axios.get(
    `${import.meta.env.VITE_HOST_DEV}/addStation/getAllStations/?email=${data}`
  )
}
