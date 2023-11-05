import { combineReducers } from '@reduxjs/toolkit';


import { ordersSlice } from './orders';


export const reducers = combineReducers({
    orders: ordersSlice.reducer,
});
