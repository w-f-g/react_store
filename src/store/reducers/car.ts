import { Reducer } from "redux"
import { TAction } from "../type"
import actionType from "../actions/actionType"

const updateGoodsItem = (goods: CarGoodsItem, data: CarGoodsItem[]): CarGoodsItem[] => {
  const index = data.findIndex(x => x.label === goods.label)!
  const len = data.length
  if (index === 0) {
    const next = data.slice(1, len)
    return [goods, ...next]
  } else if (index === len - 1) {
    const prev = data.slice(0, index)
    return [...prev, goods]
  } else {
    const prev = data.slice(0, index)
    const next = data.slice(index + 1, len)
    return [...prev, goods, ...next]
  }
}

const removeGoodsToCar = (goods: CarGoodsItem, data: CarGoodsItem[]): CarGoodsItem[] => {
  const index = data.findIndex(x => x.label === goods.label)!
  const _data = data.slice()
  _data.splice(index, 1)
  return _data
}

const carReducers: Reducer<CarGoodsItem[], TAction<CarGoodsItem>> = (state = [], action) => {
  switch (action.type) {
    case actionType.ADD_GOODS_TO_CAR:
      return [...state, action.payload]
    case actionType.CLEAR_CAR:
      return []
    case actionType.UPDATE_GOODS_ITEM: {
      const goods = action.payload
      return updateGoodsItem(goods, state)
    }
    case actionType.REMOVE_GOODS_TO_CAR: {
      const goods = action.payload
      return removeGoodsToCar(goods, state)
    }
    default:
      return state
  }
}

export default carReducers