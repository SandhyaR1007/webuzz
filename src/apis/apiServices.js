import axios from "axios";
import {
  DISLIKE_A_POST,
  GET_ALL_POSTS,
  GET_ALL_USERS,
  LIKE_A_POST,
  LOGIN,
} from "./apiUrls";

export const postLogin = (username, password) =>
  axios.post(LOGIN, {
    username,
    password,
  });
export const getAllPostsApi = () => axios.get(GET_ALL_POSTS);

export const likePostApi = (token, postId) => {
  console.log(token, postId);
  console.log(`${LIKE_A_POST}${postId}`);
  return axios.post(
    `${LIKE_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const dislikePostApi = (token, postId) => {
  console.log(token, postId);
  console.log(`${DISLIKE_A_POST}${postId}`);
  return axios.post(
    `${DISLIKE_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const getAllUsersApi = () => axios.get(GET_ALL_USERS);
