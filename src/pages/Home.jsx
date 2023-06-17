import React, { useEffect } from "react";
import Filters from "../components/filters/Filters";
import { NewPostCard, PostList, SuggestedUsers } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  postsSelector,
  fetchPosts,
  loadingSelector,
  errorSelector,
} from "../app/features/postsSlice";
import { usersSelector } from "../app/features/usersSlice";

const Home = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(postsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const { currentUserId, usersData } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const currentUser = usersData.find(({ _id }) => _id === currentUserId);

  const feedPosts = postsData.filter(
    (data) =>
      data.userId === currentUserId ||
      currentUser?.following.some(({ _id }) => _id === data.userId)
  );

  return (
    <>
      <Filters />
      <NewPostCard />
      {loading ? <h3>Loading...</h3> : <PostList posts={feedPosts} />}
    </>
  );
};

export default Home;
