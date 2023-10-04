import { configureStore } from '@reduxjs/toolkit'

import signUpStepsReducer from './signUp'
import userReducer from './user'

const store = configureStore({
  reducer: {
    signUpStep: signUpStepsReducer,
    user: userReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
