import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showNav: false,
    showVideo: false,
  },
  reducers: {
    toggleNav: (state, action) => {
      state.showVideo = false;
      state.showNav = !state.showNav;
    },
    toggleVideo: (state, action) => {
      state.showNav = false;
      state.showVideo = !state.showVideo;
    },
    hideModal: (state, action) => {
      state.showNav = false;
      state.showVideo = false;
    },
  },
});

export default modalSlice.reducer;

export const { toggleNav, toggleVideo, hideModal } = modalSlice.actions;
