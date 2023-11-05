import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './slices/'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const createDebugger = require('redux-flipper').default;

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(createDebugger()),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

