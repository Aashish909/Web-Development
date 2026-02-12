import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import cartSlice from "./cartSlice";
import coordinatesSlice from "./coordinatesSlice";
import filterSlice from "./filterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    toggleSlice,
    cartSlice,
    coordinatesSlice,
    filterSlice,
    authSlice,
  },
});

export default store;
