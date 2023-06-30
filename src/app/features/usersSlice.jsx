import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPostService,
  editProfileService,
  followUserService,
  getAllUsersService,
  removeBookmarkedPostService,
  unfollowUserService,
} from "../../services/apiServices";
import { notify } from "../../utils/toastify";

const initialState = {
  usersData: [],

  disabled: {
    bookmarkDisabled: false,
    followDisabled: false,
    editDisabled: false,
  },
};
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersService();
      let usersList = [];

      if (response.status === 200) {
        usersList = response.data.users;
      }

      return usersList;
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.message);
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async ({ token, postId, username }, { rejectWithValue }) => {
    try {
      const response = await bookmarkPostService(token, postId);

      if (response.status === 200 || response.status === 201) {
        let foundUser = localStorage.getItem("foundUser");
        if (foundUser) {
          foundUser = JSON.parse(foundUser);
          localStorage.setItem(
            "foundUser",
            JSON.stringify({ ...foundUser, bookmarks: response.data.bookmarks })
          );
        }
        notify("success", "Post Bookmarked");
        return { bookmarks: response.data.bookmarks, username };
      }
      return {};
    } catch (err) {
      return rejectWithValue(err?.response?.data?.errors[0] || err?.message);
    }
  }
);

export const removePostFromBookmarks = createAsyncThunk(
  "users/removePostFromBookmarks",
  async ({ token, postId, username }, { rejectWithValue }) => {
    try {
      const response = await removeBookmarkedPostService(token, postId);

      if (response.status === 200 || response.status === 201) {
        let foundUser = localStorage.getItem("foundUser");
        if (foundUser) {
          foundUser = JSON.parse(foundUser);
          localStorage.setItem(
            "foundUser",
            JSON.stringify({ ...foundUser, bookmarks: response.data.bookmarks })
          );
        }
        notify("info", "Removed from Bookmarks");
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
    try {
      const response = await followUserService(encodedToken, userId);

      if (response.status === 200) {
        notify("success", "User Followed");
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
    try {
      const response = await unfollowUserService(encodedToken, userId);

      if (response.status === 200) {
        notify("warn", "User UnFollowed");
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

      if (response.status === 201) {
        notify("success", "Profile Edited Successfully");
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
      .addCase(bookmarkPost.pending, (state) => {
        state.disabled.bookmarkDisabled = true;
      })
      .addCase(bookmarkPost.fulfilled, (state, action) => {
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data.username === action.payload.username
        );

        if (userIndex !== null && userIndex !== undefined) {
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
        }
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(bookmarkPost.rejected, (state) => {
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(removePostFromBookmarks.pending, (state) => {
        state.disabled.bookmarkDisabled = true;
      })
      .addCase(removePostFromBookmarks.fulfilled, (state, action) => {
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data.username === action.payload.username
        );

        if (userIndex !== null && userIndex !== undefined) {
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
        }
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(removePostFromBookmarks.rejected, (state) => {
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(followUser.pending, (state) => {
        state.disabled.followDisabled = true;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const { followUser, user } = action.payload;
        const followIndex = state.usersData.findIndex(
          (data) => data._id === followUser._id
        );
        const userIndex = state.usersData.findIndex(
          (data) => data._id === user._id
        );

        if (followIndex !== undefined) {
          state.usersData[followIndex] = followUser;
        }
        if (userIndex !== undefined) {
          state.usersData[userIndex] = user;
          localStorage.setItem("foundUser", JSON.stringify(user));
        }
        state.disabled.followDisabled = false;
      })
      .addCase(followUser.rejected, (state) => {
        state.disabled.followDisabled = false;
      })
      .addCase(unfollowUser.pending, (state) => {
        state.disabled.followDisabled = true;
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        const { followUser, user } = action.payload;
        const followIndex = state.usersData.findIndex(
          (data) => data._id === followUser._id
        );
        const userIndex = state.usersData.findIndex(
          (data) => data._id === user._id
        );

        if (followIndex !== undefined) {
          state.usersData[followIndex] = followUser;
        }
        if (userIndex !== undefined) {
          state.usersData[userIndex] = user;
          localStorage.setItem("foundUser", JSON.stringify(user));
        }
        state.disabled.followDisabled = false;
      })
      .addCase(unfollowUser.rejected, (state) => {
        state.disabled.followDisabled = false;
      })
      .addCase(editProfile.pending, (state) => {
        state.disabled.editDisabled = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        const userIndex = state.usersData.findIndex(
          (data) => data._id === action.payload._id
        );

        if (userIndex !== undefined) {
          state.usersData[userIndex] = action.payload;
          localStorage.setItem("foundUser", JSON.stringify(action.payload));
        }
        state.disabled.editDisabled = false;
      })
      .addCase(editProfile.rejected, (state) => {
        state.disabled.editDisabled = false;
      });
  },
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
