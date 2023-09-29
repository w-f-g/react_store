import { combineReducers } from 'redux'
import carReducers from './car'

export default combineReducers({
  car: carReducers,
})