import axios from "axios";
import {
  BOOKMARK_A_POST,
  DISLIKE_A_POST,
  POSTS,
  GET_ALL_USERS,
  LIKE_A_POST,
  LOGIN,
  REMOVE_BOOKMARKED_POST,
  GET_POSTS_BY_USERNAME,
  FOLLOW_A_USER,
  UNFOLLOW_A_USER,
  SIGNUP,
  EDIT_PROFILE,
  EDIT_POST,
} from "./apiUrls";

export const postLogin = (username, password) =>
  axios.post(LOGIN, {
    username,
    password,
  });

export const postSignup = (userInfo) =>
  axios.post(SIGNUP, {
    ...userInfo,
  });

export const getAllPostsService = () => axios.get(POSTS);

export const createNewPostsService = (token, postData) =>
  axios.post(
    POSTS,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const likePostService = (token, postId) =>
  axios.post(
    `${LIKE_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const dislikePostService = (token, postId) =>
  axios.post(
    `${DISLIKE_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editPostService = (token, postData) => {
  return axios.post(
    `${EDIT_POST}${postData._id}`,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deletePostService = (token, postId) =>
  axios.delete(`${POSTS}/${postId}`, {
    headers: {
      authorization: token,
    },
  });

export const getAllUsersService = () => axios.get(GET_ALL_USERS);

export const bookmarkPostService = (token, postId) =>
  axios.post(
    `${BOOKMARK_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removeBookmarkedPostService = (token, postId) =>
  axios.post(
    `${REMOVE_BOOKMARKED_POST}${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const getPostsByUsernameService = (username) =>
  axios.get(`${GET_POSTS_BY_USERNAME}${username}`);

export const followUserService = (token, followUserId) =>
  axios.post(
    `${FOLLOW_A_USER}${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const unfollowUserService = (token, unfollowUserId) =>
  axios.post(
    `${UNFOLLOW_A_USER}${unfollowUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
export const editProfileService = (token, userData) =>
  axios.post(
    `${EDIT_PROFILE}`,
    { userData },
    {
      headers: {
        authorization: token,
      },
    }
  );
