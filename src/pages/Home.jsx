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

const Home = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(postsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  console.log({ postsData });
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <section className="w-full lg:w-2/3  px-3">
        <Filters />
        <NewPostCard />
        {loading ? <h3>Loading...</h3> : <PostList posts={postsData} />}
      </section>

      <section className="relative hidden lg:block w-1/3  ">
        <SuggestedUsers />
      </section>
    </>
  );
};

export default Home;
