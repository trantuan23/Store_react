// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ productSlice";
import filterReducer from "./slices/filterReducer";
import relatedReducer from "./slices/relatedProduct";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterReducer,
    dataRelated:relatedReducer,
    cart: cartReducer,
  },
});

export default store;
