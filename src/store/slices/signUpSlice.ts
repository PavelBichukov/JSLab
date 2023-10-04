import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IStepsState } from './slices.types'

const initialState = {
  currentStep: 1,
} as IStepsState

const signUpSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
  },
})

export const { setCurrentStep } = signUpSlice.actions

export default signUpSlice.reducer
