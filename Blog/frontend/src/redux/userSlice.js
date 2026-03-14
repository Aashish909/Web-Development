import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: JSON.parse(localStorage.getItem("user")) || {token: null},
  reducers: {
    loginUser :(state, action)=>{
      localStorage.setItem("user", JSON.stringify(action.payload));
        return action.payload
    },
    logoutUser:(state, action)=>{
      localStorage.removeItem("user")
    }
  }
})

export const {loginUser, logoutUser} = userSlice.actions
export default userSlice.reducer