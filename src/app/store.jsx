import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../app/features/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
