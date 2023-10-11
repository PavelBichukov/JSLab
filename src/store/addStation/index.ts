import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'

import { IStepsState } from '../slices.types'

const initialState = {
  currentStep: ADD_STATION_STEPS.STATION_TYPE,
} as IStepsState

const addStationSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<string>) => {
      state.currentStep = action.payload
    },
  },
})
export const { setCurrentStep } = addStationSlice.actions

export default addStationSlice.reducer
