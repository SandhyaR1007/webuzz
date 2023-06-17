import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostsApi } from "../../apis/apiServices";

const initialState = {
  postsData: [],
  error: null,
  loading: false,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await getAllPostsApi();
    let postsList = [];
    console.log({ response });
    if (response.status === 200) {
      postsList = response.data.posts;
    }
    return postsList;
  } catch (err) {
    console.log(err);
    return err;
  }
});
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
      });
  },
});

export const postsSelector = (state) => state.posts.postsData;
export const loadingSelector = (state) => state.posts.loading;
export const errorSelector = (state) => state.posts.error;

export default postsSlice.reducer;
