import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./ReducerModel/CartModel";

// Cart Slice to maintain the items in the cart
const initialState: CartState = {
    itemsByUser: {},
    currentUserId: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {

        setUserId: (state, action) => {
            state.currentUserId = action.payload
        },

        // add an item to cart if item already exist then increase the quantity
        addItemToCart: (state, action) => {

            const uid = state.currentUserId

            if (!uid) return

            const userCart = state.itemsByUser[uid] || []
            const existingItem = userCart.find(item => item.id === action.payload.id)

            if (existingItem) {
                existingItem.qty += 1
                existingItem.sum += existingItem.price
            }
            else {
                userCart.push({
                    ...action.payload,
                    qty: 1,
                    sum: action.payload.price
                })
            }
            state.itemsByUser[uid] = userCart
        },

        // decrease quantity of an item if present or else remove prolduct from cart
        removeItemFromCart: (state, action) => {

            const uid = state.currentUserId;
            if (!uid) return;

            let userCart = state.itemsByUser[uid] || [];

            const existingItem = userCart.find(item => item.id === action.payload.id)

            if (existingItem && existingItem.qty != 1) {
                existingItem.qty -= 1
                existingItem.sum -= existingItem.price
            }
            else {
                userCart = userCart.filter(item => item.id != action.payload.id)
            }

            state.itemsByUser[uid] = userCart
        },

        // remove a product from cart
        removeProductFromCart: (state, action) => {
            const uid = state.currentUserId;
            if (!uid) return;

            let userCart = state.itemsByUser[uid] || [];
            userCart = userCart.filter(item => item.id != action.payload.id)
            state.itemsByUser[uid] = userCart
        },


        // remove all products from cart
        emptyCart: (state) => {
            const uid = state.currentUserId;
            if (!uid) return;

            state.itemsByUser[uid] = []
        }
    }
})

export const { addItemToCart, removeItemFromCart, removeProductFromCart, emptyCart, setUserId } = cartSlice.actions

export default cartSlice.reducer