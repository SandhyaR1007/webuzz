import React from "react";
import { getPostsFromIds, getUserByUsername } from "../utils/postsHelper";
import { useSelector } from "react-redux";
import { authSelector } from "../app/features/authSlice";
import { usersSelector } from "../app/features/usersSlice";
import { PostList } from "../components";
import { postsSelector } from "../app/features/postsSlice";

const Bookmarks = () => {
  const {
    foundUser: { username },
  } = useSelector(authSelector);
  const { usersData } = useSelector(usersSelector);
  const { postsData } = useSelector(postsSelector);
  const userDetails = getUserByUsername(usersData, username);
  const bookmarkPosts = getPostsFromIds(
    postsData,
    userDetails?.bookmarks ?? []
  );
  console.log({ bookmarkPosts });
  return <div>{bookmarkPosts && <PostList posts={bookmarkPosts} />}</div>;
};

export default Bookmarks;
