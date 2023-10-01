import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const state: Record<'goodsList', CarGoodsItem[]> = {
  goodsList: []
}

const useCarStore = create(immer(() => state))

export const addGoodsToCar = (goods: CarGoodsItem) => {
  useCarStore.setState(_state => {
    _state.goodsList.push(goods)
  })
}

export const updateGoodsItem = (goods: CarGoodsItem) => {
  useCarStore.setState(_state => {
    const index = _state.goodsList.findIndex(x => x.label === goods.label)!
    _state.goodsList[index] = goods
  })
}

export const removeGoodsToCar = (goods: CarGoodsItem) => {
  useCarStore.setState(_state => {
    const index = _state.goodsList.findIndex(x => x.label === goods.label)!
    _state.goodsList.splice(index, 1)
  })
}

export const clearCar = () => {
  useCarStore.setState(_state => {
    _state.goodsList = []
  })
}

export const payCar = (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      clearCar()
      resolve(true)
    }, 3000)
  })
}

export default useCarStore