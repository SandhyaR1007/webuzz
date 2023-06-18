import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  dislikePostApi,
  getAllPostsApi,
  likePostApi,
} from "../../apis/apiServices";
import { act } from "react-dom/test-utils";

const initialState = {
  postsData: [],
  error: null,
  loading: false,
  isLiking: false,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await getAllPostsApi();
    let postsList = [];

    if (response.status === 200) {
      postsList = response.data.posts;
    }
    return postsList;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ token, postId }) => {
    console.log("likePost");
    try {
      const response = await likePostApi(token, postId);
      console.log({ response });
      if (response.status === 201) {
        return response.data.posts;
      }

      return [];
    } catch (err) {
      console.log({ err });
      return err;
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ token, postId }) => {
    console.log("dislikePost");
    try {
      const response = await dislikePostApi(token, postId);
      console.log({ response });
      if (response.status === 201) {
        return response.data.posts;
      }

      return [];
    } catch (err) {
      console.log({ err });
      return err;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.postsData = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(likePost.pending, (state) => {
        state.isLiking = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.isLiking = false;
        state.postsData = action.payload;
      })
      .addCase(likePost.rejected, (state) => {
        state.isLiking = false;
      })
      .addCase(dislikePost.pending, (state) => {
        state.isLiking = true;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.isLiking = false;
        state.postsData = action.payload;
      })
      .addCase(dislikePost.rejected, (state) => {
        state.isLiking = false;
      });
  },
});

export const postsSelector = (state) => state.posts;

export default postsSlice.reducer;
