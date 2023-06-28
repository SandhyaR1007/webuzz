import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  commentOnPostService,
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
        notify("success", "Post Edited Successfully");
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
        notify("info", "Post Deleted");
        return response.data.posts;
      }
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err?.message);
    }
  }
);
export const commentOnPost = createAsyncThunk(
  "posts/commentOnPost",
  async ({ encodedToken, postData }, { rejectWithValue }) => {
    console.log({ encodedToken, postData });
    try {
      const response = await commentOnPostService(encodedToken, postData);
      console.log({ response });
      if (response.status === 201) {
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
  reducers: {
    addComment: (state, action) => {
      console.log(state, action);
      const { newComment, _id } = action.payload;
      const postIndex = state.postsData.findIndex((post) => post._id === _id);
      if (postIndex !== undefined) {
        state.postsData[postIndex].comments.push(newComment);
      }
    },
    editComment: (state, action) => {
      const { updatedComment, postId, commentId } = action.payload;
      const postIndex = state.postsData.findIndex(
        (post) => post._id === postId
      );
      const commentIndex = state.postsData[postIndex].comments.findIndex(
        (comment) => comment._id === commentId
      );
      if (postIndex !== undefined) {
        state.postsData[postIndex].comments[commentIndex] = updatedComment;
      }
    },
    deleteComment: (state, action) => {
      const { postId, commentId } = action.payload;
      const postIndex = state.postsData.findIndex(
        (post) => post._id === postId
      );
      const commentIndex = state.postsData[postIndex].comments.findIndex(
        (comment) => comment._id === commentId
      );
      if (postIndex !== undefined) {
        state.postsData[postIndex].comments.splice(commentIndex, 1);
      }
    },
    replyOnComment: (state, action) => {
      const { reply, postId, commentId } = action.payload;
      const postIndex = state.postsData.findIndex(
        (post) => post._id === postId
      );
      const commentIndex = state.postsData[postIndex].comments.findIndex(
        (comment) => comment._id === commentId
      );
      if (postIndex !== undefined) {
        if (state.postsData[postIndex].comments[commentIndex].replies) {
          state.postsData[postIndex].comments[commentIndex].replies.push(reply);
        } else {
          state.postsData[postIndex].comments[commentIndex].replies = [reply];
        }
      }
    },
  },
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
      })
      .addCase(commentOnPost.fulfilled, (state, action) => {
        if (action.payload) {
          state.postsData = action.payload;
        }
      });
  },
});

export const postsSelector = (state) => state.posts;

export const { addComment, editComment, deleteComment, replyOnComment } =
  postsSlice.actions;
export default postsSlice.reducer;
