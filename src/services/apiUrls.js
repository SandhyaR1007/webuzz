const baseUrl = "/api";

export const LOGIN = `${baseUrl}/auth/login`;
export const SIGNUP = `${baseUrl}/auth/signup`;

export const POSTS = `${baseUrl}/posts`;
export const LIKE_A_POST = `${baseUrl}/posts/like/`;
export const DISLIKE_A_POST = `${baseUrl}/posts/dislike/`;
export const BOOKMARK_A_POST = `${baseUrl}/users/bookmark/`;
export const REMOVE_BOOKMARKED_POST = `${baseUrl}/users/remove-bookmark/`;
export const EDIT_POST = `${baseUrl}/posts/edit/`;
export const COMMENT_ON_POST = `${baseUrl}/posts/comment/`;

export const GET_ALL_USERS = `${baseUrl}/users`;

export const GET_POSTS_BY_USERNAME = `${baseUrl}/posts/user/`;

export const FOLLOW_A_USER = `${baseUrl}/users/follow/`;
export const UNFOLLOW_A_USER = `${baseUrl}/users/unfollow/`;

export const EDIT_PROFILE = `${baseUrl}/users/edit/`;
