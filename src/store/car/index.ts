import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunkAction } from '../type'

export const car = createSlice({
  name: 'car',
  initialState: [] as CarGoodsItem[],
  reducers: {
    addGoodsToCar: (state, action: PayloadAction<CarGoodsItem>) => {
      state.push(action.payload)
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearCar: _state => _state = [],
    updateGoodsItem: (state, action: PayloadAction<CarGoodsItem>) => {
      const goods = action.payload
      const index = state.findIndex(x => x.label === goods.label)!
      state[index] = goods
    },
    removeGoodsToCar: (state, action: PayloadAction<CarGoodsItem>) => {
      const goods = action.payload
      const index = state.findIndex(x => x.label === goods.label)!
      state.splice(index, 1)
    },
  },
})

export const payCar = (): AppThunkAction<Promise<boolean>> => {
  return (dispatch) => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(clearCar())
        resolve(true)
      }, 3000)
    })
  }
}

export const { addGoodsToCar, clearCar, updateGoodsItem, removeGoodsToCar } = car.actions

export default car.reducer