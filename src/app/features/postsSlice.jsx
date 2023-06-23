import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewPostsService,
  deletePostService,
  dislikePostService,
  editPostService,
  getAllPostsService,
  likePostService,
} from "../../services/apiServices";
import { notify } from "../../utils/toastify";

const initialState = {
  postsData: [],
  error: null,
  loading: false,
  isLiking: false,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await getAllPostsService();
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
    try {
      const response = await likePostService(token, postId);

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
    try {
      const response = await dislikePostService(token, postId);

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

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ encodedToken, postData }, { rejectWithValue }) => {
    try {
      const response = await createNewPostsService(encodedToken, postData);

      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.message);
    }
  }
);
export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ encodedToken, postData }, { rejectWithValue }) => {
    console.log({ encodedToken, postData });
    try {
      const response = await editPostService(encodedToken, postData);
      console.log({ response });
      if (response.status === 201) {
        notify("Post Edited Successfully", true);
        return response.data.posts;
      }
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.message);
    }
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ encodedToken, postId }, { rejectWithValue }) => {
    console.log({ encodedToken, postId });
    try {
      const response = await deletePostService(encodedToken, postId);
      console.log({ response });
      if (response.status === 201) {
        notify("Post Deleted", true);
        return response.data.posts;
      }
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.message);
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
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        if (action.payload) {
          state.postsData = action.payload;
        }
      })
      .addCase(editPost.fulfilled, (state, action) => {
        if (action.payload) {
          state.postsData = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (action.payload) {
          state.postsData = action.payload;
        }
      });
  },
});

export const postsSelector = (state) => state.posts;

export default postsSlice.reducer;
