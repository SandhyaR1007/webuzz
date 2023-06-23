import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import {
  bookmarkPostService,
  editProfileService,
  followUserService,
  getAllUsersService,
  removeBookmarkedPostService,
  unfollowUserService,
} from "../../services/apiServices";

const initialState = {
  usersData: [],
  editing: false,
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await getAllUsersService();
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
  async ({ token, postId, username }, { rejectWithValue }) => {
    try {
      const response = await bookmarkPostService(token, postId);
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
        return { bookmarks: response.data.bookmarks, username };
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
  async ({ token, postId, username }, { rejectWithValue }) => {
    try {
      const response = await removeBookmarkedPostService(token, postId);
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
        return { bookmarks: response.data.bookmarks, username };
      }
      return {};
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.response?.data?.errors[0] || err?.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ encodedToken, userId }, { rejectWithValue }) => {
    console.log(userId);
    try {
      const response = await followUserService(encodedToken, userId);
      console.log({ response });
      if (response.status === 200) {
        return {
          followUser: response.data.followUser,
          user: response.data.user,
        };
      }
    } catch (error) {
      console.log({ error });
      return rejectWithValue(error.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ encodedToken, userId }, { rejectWithValue }) => {
    console.log("unfollow");
    try {
      const response = await unfollowUserService(encodedToken, userId);
      console.log({ response });
      if (response.status === 200) {
        return {
          followUser: response.data.followUser,
          user: response.data.user,
        };
      }
    } catch (error) {
      console.log("unfollow", { error });
      return rejectWithValue(error.message);
    }
  }
);

export const editProfile = createAsyncThunk(
  "users/editProfile",
  async ({ encodedToken, userData }, { rejectWithValue }) => {
    try {
      const response = await editProfileService(encodedToken, userData);
      console.log({ response });
      if (response.status === 201) {
        return response.data.user;
      }
    } catch (error) {
      console.log({ error });
      return rejectWithValue(error.message);
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
          (data) => data.username === action.payload.username
        );

        if (userIndex !== null)
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
      })
      .addCase(removePostFromBookmarks.fulfilled, (state, action) => {
        console.log({ action });
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data.username === action.payload.username
        );
        console.log({ userIndex });
        if (userIndex !== null)
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const { followUser, user } = action.payload;
        const followIndex = state.usersData.findIndex(
          (data) => data._id === followUser._id
        );
        const userIndex = state.usersData.findIndex(
          (data) => data._id === user._id
        );
        console.log(followIndex, userIndex);
        if (followIndex !== undefined) {
          state.usersData[followIndex] = followUser;
        }
        if (userIndex !== undefined) {
          state.usersData[userIndex] = user;
          localStorage.setItem("foundUser", JSON.stringify(user));
        }
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const { followUser, user } = action.payload;
        const followIndex = state.usersData.findIndex(
          (data) => data._id === followUser._id
        );
        const userIndex = state.usersData.findIndex(
          (data) => data._id === user._id
        );
        console.log(followIndex, userIndex);
        if (followIndex !== undefined) {
          state.usersData[followIndex] = followUser;
        }
        if (userIndex !== undefined) {
          state.usersData[userIndex] = user;
          localStorage.setItem("foundUser", JSON.stringify(user));
        }
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        const userIndex = state.usersData.findIndex(
          (data) => data._id === action.payload._id
        );

        if (userIndex !== undefined) {
          state.usersData[userIndex] = action.payload;
          localStorage.setItem("foundUser", JSON.stringify(action.payload));
        }
      });
  },
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
