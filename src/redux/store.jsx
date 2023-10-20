import { configureStore } from "@reduxjs/toolkit";
import productsSlices from "./productsSlices";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    products: productsSlices,
    cart: CartSlice,
    
  },
});

export default store;
