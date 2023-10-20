import { createSlice } from "@reduxjs/toolkit";
import product from "../Products/product";

const ProductSlice = createSlice({
  name: "products",
  initialState: product,
  reducers: {},
});

export default ProductSlice.reducer;
