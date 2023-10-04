import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUserInfo } from './slices.types'

const initialState = {
  legalFistName: '',
  legalLastName: '',
  email: '',
  password: '',
  id: '',
  isAuthorized: false,
} as IUserInfo

const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.legalFistName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.legalLastName = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload
    },
  },
})

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setId,
  setIsAuthorized,
} = userInfoSlice.actions

export default userInfoSlice.reducer
