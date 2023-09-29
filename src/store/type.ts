import { Dispatch } from 'redux'
import store from '.'
import actionType from './actions/actionType'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

type ActionType = keyof typeof actionType

export type TAction<T> = {
  type: ActionType,
  payload: T,
}

type GetAction<T extends Dispatch> = T extends Dispatch<infer A> ? A : never

export type AppStore = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

type AppAction = GetAction<AppDispath>

export type AppThunkAction<R> = ThunkAction<R, AppStore, unknown, AppAction>
export type AppThunkDispatch = ThunkDispatch<AppStore, unknown, AppAction>