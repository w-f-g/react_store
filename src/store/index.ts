import { configure } from "mobx"
import CarStore from "./car"
import { createContext, useContext } from "react"

configure({
  enforceActions: 'always',
})

const store = new CarStore()

export const storeContext = createContext<typeof store>(null!)

export const StoreProvider = storeContext.Provider

export const useCar = () => useContext(storeContext)

export default store