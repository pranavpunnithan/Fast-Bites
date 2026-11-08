import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        increaseQuantity: (state, action) => {
            const existingItem = state.find(
                (item) => item.id === action.payload
            );

            if (existingItem) {
                existingItem.quantity += 1;
            }
        },

    decreaseQuantity: (state, action) => {
    const existingItem = state.find(
        (item) => item.id === action.payload
    );

    if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
    } else {
        const index = state.findIndex(
            (item) => item.id === action.payload
        );

        state.splice(index, 1);
    }
},

        clearCart: () => {
            return [];
        },
    },
});

export const {
    addItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;
export default cartSlice.reducer;