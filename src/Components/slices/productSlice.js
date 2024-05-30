import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const userState = []

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        handleProduct(state, action) {
            console.log(action)
            switch (action.payload.type) {
                case 'ADDPRODUCT':
                    const newProduct = [...state, { name: action.payload.user }]
                    return newProduct;
                case 'REMOVEPRODUCT':
                    return state.filter(item => {
                        return item.name !== action.payload.user
                    })
                default:
                    return state
            }
        }
    },
})

const userSlice = createSlice({
    name: 'Users',
    initialState: userState,
    reducers: {
        handleUser(state, action) {
            console.log(action)
            switch (action.payload.type) {
                case 'SAVE':
                    return action.payload.data
                default:
                    return state
            }
        }
    }
})

const productReducer = productSlice.reducer

const userReducer = userSlice.reducer

export const { handleProduct } = productSlice.actions;
export const { handleUser } = userSlice.actions;

const obj = {
    productReducer,
    userReducer
};

export default obj;