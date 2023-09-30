import { Dispatch, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit"
import store from "."

type GetAction<T extends Dispatch> = T extends Dispatch<infer A> ? A : never

export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type AppAction = GetAction<AppDispatch>

export type AppThunkAction<R> = ThunkAction<R, AppStore, unknown, AppAction>
export type AppThunkDispatch = ThunkDispatch<AppStore, unknown, AppAction>