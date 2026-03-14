import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: [],
  reduces: {
    setBlogs: (state, action) => {
      return action.payload;
    },
    addBlog: (state, action) => {
      
    },

    updateBlog: (state, action) => {
     
    },

    deleteBlog: (state, action) => {
      
    },
  },
});

export const {} = blogSlice.actions;
export default blogSlice.reducer