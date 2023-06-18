const baseUrl = "/api";

export const LOGIN = `${baseUrl}/auth/login`;

export const POSTS = `${baseUrl}/posts`;
export const LIKE_A_POST = `${baseUrl}/posts/like/`;
export const DISLIKE_A_POST = `${baseUrl}/posts/dislike/`;

export const GET_ALL_USERS = `${baseUrl}/users`;
export const BOOKMARK_A_POST = `${baseUrl}/users/bookmark/`;
export const REMOVE_BOOKMARKED_POST = `${baseUrl}/users/remove-bookmark/`;
