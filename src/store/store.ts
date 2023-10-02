import { configureStore } from '@reduxjs/toolkit'

import signUpStepsReducer from './slices/signUpSlice'

const store = configureStore({
  reducer: {
    signUpStep: signUpStepsReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
