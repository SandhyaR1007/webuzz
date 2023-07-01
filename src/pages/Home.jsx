import React, { useEffect, useState } from "react";
import Filters from "../components/filters/Filters";
import {
  Loader,
  NewPostCard,
  NoPosts,
  PostList,
  SuggestedUsers,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { postsSelector, fetchPosts } from "../app/features/postsSlice";
import { usersSelector } from "../app/features/usersSlice";
import { authSelector } from "../app/features/authSlice";
import { useSort } from "../hooks/useSort";
import { scrollToTop } from "../utils/utils";

const Home = () => {
  const dispatch = useDispatch();
  const { foundUser } = useSelector(authSelector);
  const currentUserId = foundUser?._id;
  const { postsData, loading, error } = useSelector(postsSelector);

  const { usersData } = useSelector(usersSelector);
  const [sortBy, setSortBy] = useState(null);
  const { sortByLatest, sortByTrending } = useSort();

  useEffect(() => {
    dispatch(fetchPosts());
    scrollToTop();
  }, []);
  const currentUser = usersData.find(({ _id }) => _id === currentUserId);

  let feedPosts = postsData.filter(
    (data) =>
      data.userId === currentUserId ||
      currentUser?.following.some(({ _id }) => _id === data.userId)
  );
  feedPosts =
    sortBy === "trending" ? sortByTrending(feedPosts) : sortByLatest(feedPosts);

  return (
    <>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      <NewPostCard />
      {loading ? (
        <div className="text-center py-3">
          <Loader />
        </div>
      ) : (
        <>
          {feedPosts?.length > 0 ? <PostList posts={feedPosts} /> : <NoPosts />}
        </>
      )}
    </>
  );
};

export default Home;
