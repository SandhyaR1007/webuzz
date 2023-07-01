import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../app/features/postsSlice";
import { Loader, NoPosts, PostList } from "../components";
import { scrollToTop } from "../utils/utils";

const Explore = () => {
  const dispatch = useDispatch();
  const { postsData, loading } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
    scrollToTop();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center py-3">
          <Loader />
        </div>
      ) : (
        <>
          {postsData?.length > 0 ? <PostList posts={postsData} /> : <NoPosts />}
        </>
      )}
    </div>
  );
};

export default Explore;
