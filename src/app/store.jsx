import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../app/features/postsSlice";
import usersReducer from "../app/features/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
