import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface OrderState {
    loading: boolean
    data: OrderProps[]
}

const initialState: OrderState = {
    loading: false,
    data: []
}
type OrderProps = {
    customerId: String;
    items: OrderItemProps[];
    orderId: String;
    status: String;
    taxFree: Boolean;
    timestamp: Date;
    totalPrice: String;
    finalPrice: Number;
};

type OrderItemProps = {
    itemId: String;
    itemName: String;
    quantity: Number;
    price: Number;
};



export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // ----------------------------------------  GET  -----------------------------------------
        builder.addCase(getOrders.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            const items = action.payload as unknown as OrderProps[];
            state.data = items.map((item: OrderProps) => {
                return { ...item, finalPrice: item.taxFree ? item.totalPrice : parseInt(item.totalPrice) * 0.79 }
            });
            state.loading = false;
        });
        builder.addCase(getOrders.rejected, (state) => {
            console.log('getOrders FAIL ');
            state.loading = false;
        });

        // ---------------------------------------- TOGGLE  -----------------------------------------
        builder.addCase(toggleOrder.fulfilled, (state, action) => {
            state.data.map(order => {
                if (order.orderId === action.meta.arg.orderId) {
                    order.status = order.status === "open" ? "close" : "open"
                } else {
                    return order
                }
            })
        });
    }
});

export const { } = ordersSlice.actions;

export const getOrders = createAsyncThunk<{}, {}>('getOrders', async ({ }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get("https://run.mocky.io/v3/59b36c84-192f-4aa9-bdc5-968277c1d057");
        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const toggleOrder = createAsyncThunk<{}, { orderId: String }>('toggleOrder', async ({ orderId }, { }) => {
    return orderId;
});



