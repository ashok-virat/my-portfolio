import { configureStore } from "@reduxjs/toolkit";
import reducer from '../slices/productSlice'

export const store = configureStore({
    devTools: true,
    reducer: {
        product: reducer.productReducer,
        user: reducer.userReducer
    }
})

