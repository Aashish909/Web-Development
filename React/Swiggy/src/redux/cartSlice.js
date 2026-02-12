import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItem")) || [],
    resInfo: JSON.parse(localStorage.getItem("resInfo")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log("action", action);
      const { info, resInfo } = action.payload;

      //  setCartData((prev) => [...prev, info]);
      state.cartItems = [...state.cartItems, info];
      state.resInfo = resInfo;

      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      localStorage.setItem("resInfo", JSON.stringify(resInfo));
    },
    deleteItem: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItem", JSON.stringify(action.payload));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.resInfo = [];
      localStorage.removeItem("resInfo");
      localStorage.removeItem("cartItem");
    },
  },
});

export const { addToCart, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
