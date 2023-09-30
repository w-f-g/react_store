import { makeAutoObservable } from "mobx"

export default class CarStore {
  goodsList: CarGoodsItem[] = []

  constructor () {
    makeAutoObservable(this)
  }

  get price() {
    return this.goodsList.reduce((prev, { count, price: p }) => prev + count * p, 0)
  }

  addGoodsToCar(goods: CarGoodsItem) {
    this.goodsList.push(goods)
  }

  updateGoodsItem(goods: CarGoodsItem) {
    const index = this.goodsList.findIndex(x => x.label === goods.label)!
    this.goodsList[index] = goods
  }

  removeGoodsToCar(goods: CarGoodsItem) {
    const index = this.goodsList.findIndex(x => x.label === goods.label)!
    this.goodsList.splice(index, 1)
  }

  clearCar() {
    this.goodsList = []
  }

  payCar(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.clearCar()
        resolve(true)
      }, 3000)
    })
  }
}