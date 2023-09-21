import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    showNav: false,
    pathIndex: 0,
  },
  reducers: {
    toggleNav: (state, action) => {
      state.showNav = !state.showNav;
    },
  },
});

export default navSlice.reducer;

export const { toggleNav } = navSlice.actions;
