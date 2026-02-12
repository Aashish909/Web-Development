import { createSlice } from "@reduxjs/toolkit";

const coordinatesSlice = createSlice({
  name: "coordinatesSlice",
  initialState: {
    coordinates: {
      lat: 18.9690247,
      lng: 72.8205292,
    },
    reducers: {},
  },
});

export default coordinatesSlice.reducer;
