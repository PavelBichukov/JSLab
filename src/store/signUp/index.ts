import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'

import { IStepsState } from '../slices.types'

const initialState = {
  currentStep: SIGN_UP_STEPS.EMAIL,
} as IStepsState

const signUpSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<string>) => {
      state.currentStep = action.payload
    },
  },
})
export const { setCurrentStep } = signUpSlice.actions

export default signUpSlice.reducer
