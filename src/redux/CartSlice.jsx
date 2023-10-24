import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let obj = action.payload.products.find((x) => x.id == action.payload.id);
      let filter = state.find((x) => x.id == action.payload.id);
      if (filter) {
        alert("Product is already There");
      } else {
        state.push(obj);
      }
      return state;
    },

    removeCart: (state, action) => {
      let filteredCart = state.filter((x) => x.id != action.payload);
      state = filteredCart;
      return state;
    },
  },
});

export const { addToCart, removeCart } = CartSlice.actions;

export default CartSlice.reducer;
