import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  loadingSelector,
  postsSelector,
} from "../app/features/postsSlice";
import { PostList } from "../components";

const Explore = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(postsSelector);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>{loading ? <h3>Loading...</h3> : <PostList posts={postsData} />}</div>
  );
};

export default Explore;
