import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostsApi, likePostApi } from "../../apis/apiServices";

const initialState = {
  postsData: [],
  error: null,
  loading: false,
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
      return {};
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
      .addCase(likePost.pending, (state) => {});
  },
});

export const postsSelector = (state) => state.posts;

export default postsSlice.reducer;
