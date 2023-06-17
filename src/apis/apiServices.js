import axios from "axios";
import { GET_ALL_POSTS, GET_ALL_USERS } from "./apiUrls";

export const getAllPostsApi = () => axios.get(GET_ALL_POSTS);
export const getAllUsersApi = () => axios.get(GET_ALL_USERS);
