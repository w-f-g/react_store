import { AppThunkAction, TAction } from '../type'
import actionType from './actionType'

export const addGoodsToCar = (goods: CarGoodsItem): TAction<CarGoodsItem> => {
  return {
    type: actionType.ADD_GOODS_TO_CAR,
    payload: goods,
  }
}

export const clearCar = (): TAction<CarGoodsItem> => {
  return {
    type: actionType.CLEAR_CAR,
    payload: {} as CarGoodsItem,
  }
}

export const updateGoodsItem = (goods: CarGoodsItem): TAction<CarGoodsItem> => {
  return {
    type: actionType.UPDATE_GOODS_ITEM,
    payload: goods,
  }
}

export const removeGoodsToCar = (goods: CarGoodsItem): TAction<CarGoodsItem> => {
  return {
    type: actionType.REMOVE_GOODS_TO_CAR,
    payload: goods,
  }
}

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