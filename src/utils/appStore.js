import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const savedCart = localStorage.getItem("cart");

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: savedCart ? JSON.parse(savedCart) : [],
    },
});
appStore.subscribe(() => {
    const cart = appStore.getState().cart;

    localStorage.setItem("cart", JSON.stringify(cart));
});

export default appStore;