import { configureStore } from '@reduxjs/toolkit'
import carReducer from './car'

export default configureStore({
  reducer: {
    car: carReducer,
  },
})