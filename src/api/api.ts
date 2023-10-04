import axios from 'axios'

export const verifyOTP = async (nextData) => {
  return await axios.post(`${import.meta.env.VITE_HOST_DEV}/user/verifyOTP`, {
    nextData,
  })
}

export const signUpEmail = async (data) => {
  return await axios.post(`${import.meta.env.VITE_HOST_DEV}/user/signup`, {
    data,
  })
}
