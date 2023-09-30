import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppStore, AppThunkDispatch } from '../type'

export const useAppDispatch: () => AppThunkDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector

export const useCar = () => useAppSelector(state => state.car)