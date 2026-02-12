import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: {
    searchLocationBarToggle: false,
    loginToggle: false,
    isDiffRes: false,
    similarResDish: {
      isSimilarResDishes: false,
      city: "",
      resLocation: "",
      resId: "",
      itemId: "",
    },
  },
  reducers: {
    toggleSearchLocationBar: (state) => {
      state.searchLocationBarToggle = !state.searchLocationBarToggle;
    },
    toggleLogin: (state) => {
      state.loginToggle = !state.loginToggle;
    },
    toggleIsDiffRes: (state) => {
      state.isDiffRes = !state.isDiffRes;
    },
    // toggleIsSimilarResDishes: (state) => {
    //   state.similarResDish.isSimilarResDishes = !state.similarResDish.isSimilarResDishes;
    // },
    setSimilarResDish: (state, action) => {
      state.similarResDish = action.payload;
    },
    resetSimilarResDish: (state) => {
      state.similarResDish = {
      isSimilarResDishes: false,
      city: "",
      resLocation: "",
      resId: "",
      itemId: "",
      }
    }
  },
});

export const { toggleSearchLocationBar, toggleLogin, toggleIsDiffRes, toggleIsSimilarResDishes, setSimilarResDish, resetSimilarResDish } = toggleSlice.actions;

export default toggleSlice.reducer;
