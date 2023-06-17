import axios from "axios";
import { GET_ALL_POSTS } from "./apiUrls";

export const getAllPostsApi = () => axios.get(GET_ALL_POSTS);
