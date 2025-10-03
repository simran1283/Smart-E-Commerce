import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./ReducerModel/CartModel";

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {

        // add an item to cart if item already exist then increase the quantity
        addItemToCart: (state, action) => {

            const existingItem = state.items.find(item => item.id === action.payload.id)

            if (existingItem) {
                existingItem.qty += 1
                existingItem.sum += existingItem.price
            }
            else {
                state.items.push({
                    ...action.payload,
                    qty: 1,
                    sum: action.payload.price
                })
            }
        },

        // decrease quantity of an item if present or else remove prolduct from cart
        removeItemFromCart: (state, action) => {

            const existingItem = state.items.find(item => item.id === action.payload.id)

            if (existingItem && existingItem.qty != 1) {
                existingItem.qty -= 1
                existingItem.sum -= existingItem.price
            }
            else {
                state.items = state.items.filter(item => item.id != action.payload.id)
            }
        },

        // remove a product from cart
        removeProductFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload.id)
        },


        // remove all products from cart
        emptyCart: (state) => {
            state.items = []
        }
    }
})

export const { addItemToCart, removeItemFromCart, removeProductFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer