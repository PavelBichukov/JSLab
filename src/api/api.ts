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
