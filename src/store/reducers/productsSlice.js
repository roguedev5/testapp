import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    selectedProduct(state, action) {
      return state;
    },
    deleteProduct(state, action) {
      return state;
    },
  },
});

export const { selectedProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
