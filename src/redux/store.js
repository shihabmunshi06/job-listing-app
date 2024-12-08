import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";

const store = configureStore({
  reducer: {
    tags: tagsReducer,
  },
});

export default store;
