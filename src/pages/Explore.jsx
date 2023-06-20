import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../app/features/postsSlice";
import { PostList } from "../components";
import { sortByLatest } from "../utils/filters";

const Explore = () => {
  const dispatch = useDispatch();
  const { postsData, loading } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const feedPosts = sortByLatest(postsData);
  return (
    <div>{loading ? <h3>Loading...</h3> : <PostList posts={feedPosts} />}</div>
  );
};

export default Explore;
