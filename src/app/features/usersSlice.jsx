import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import {
  bookmarkPostApi,
  getAllUsersApi,
  removeBookmarkedPostApi,
} from "../../apis/apiServices";

const initialState = {
  usersData: [],
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await getAllUsersApi();
    let usersList = [];

    if (response.status === 200) {
      usersList = response.data.users;
    }

    return usersList;
  } catch (err) {
    console.log({ err });
    return err;
  }
});

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async ({ token, postId, userId }, { rejectWithValue }) => {
    try {
      const response = await bookmarkPostApi(token, postId);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        let foundUser = localStorage.getItem("foundUser");
        if (foundUser) {
          foundUser = JSON.parse(foundUser);
          localStorage.setItem(
            "foundUser",
            JSON.stringify({ ...foundUser, bookmarks: response.data.bookmarks })
          );
        }
        return { bookmarks: response.data.bookmarks, userId };
      }
      return {};
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.response?.data?.errors[0] || err?.message);
    }
  }
);

export const removePostFromBookmarks = createAsyncThunk(
  "users/removePostFromBookmarks",
  async ({ token, postId, userId }, { rejectWithValue }) => {
    try {
      const response = await removeBookmarkedPostApi(token, postId);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        let foundUser = localStorage.getItem("foundUser");
        if (foundUser) {
          foundUser = JSON.parse(foundUser);
          localStorage.setItem(
            "foundUser",
            JSON.stringify({ ...foundUser, bookmarks: response.data.bookmarks })
          );
        }
        return { bookmarks: response.data.bookmarks, userId };
      }
      return {};
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.response?.data?.errors[0] || err?.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersData = action.payload;
      })
      .addCase(bookmarkPost.fulfilled, (state, action) => {
        console.log({ action });
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data._id === action.payload.userId
        );
        console.log({ userIndex });
        if (userIndex !== null)
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
      })
      .addCase(removePostFromBookmarks.fulfilled, (state, action) => {
        console.log({ action });
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data._id === action.payload.userId
        );
        console.log({ userIndex });
        if (userIndex !== null)
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
      });
  },
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
