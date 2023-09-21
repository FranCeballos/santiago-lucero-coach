import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./nav-slice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
