import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../app/features/postsSlice";
import { Loader, PostList } from "../components";

const Explore = () => {
  const dispatch = useDispatch();
  const { postsData, loading } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center py-3">
          <Loader />
        </div>
      ) : (
        <>
          <PostList posts={postsData} />
        </>
      )}
    </div>
  );
};

export default Explore;
