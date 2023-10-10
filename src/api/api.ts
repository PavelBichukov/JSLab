import axios from 'axios'

export const verifyOTP = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/verification/verifyOTP`,
    data
  )
}

export const signUpEmail = async (data) => {
  return await axios.post(`${import.meta.env.VITE_HOST_DEV}/signup`, data)
}

export const signUpContinue = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/signup/continue`,
    data
  )
}

export const signUpBusiness = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/signup/business`,
    data
  )
}

export const signUpLocation = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/signup/location`,
    data
  )
}

export const login = async (data) => {
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