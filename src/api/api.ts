import axios from 'axios'

export const verifyOTP = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/user/verifyOTP`,
    data
  )
}

export const signUpEmail = async (data) => {
  return await axios.post(`${import.meta.env.VITE_HOST_DEV}/user/signup`, data)
}

export const signUpContinue = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_HOST_DEV}/user/signup-continue`,
    data
  )
}

