import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { getUserByUsername } from "../utils/postsHelper";
import { useSelector } from "react-redux";
import { usersSelector } from "../app/features/usersSlice";

import { getPostsByUsername } from "../services/apiHelper";
import { Loader, NoPosts, PostList, UserProfileCard } from "../components";
import { postsSelector } from "../app/features/postsSlice";
import { scrollToTop } from "../utils/utils";

const UserProfile = () => {
  const { username } = useParams();
  const { usersData } = useSelector(usersSelector);
  const { postsData } = useSelector(postsSelector);

  const userDetails = getUserByUsername(usersData, username);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    scrollToTop();
    setLoading(true);
    let id = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    if (userDetails) {
      scrollToTop();
      getPostsByUsername(username).then((res) => {
        if (res.success) {
          setUserPosts(res.data);
        }
      });
    }
  }, [userDetails]);
  useEffect(() => {
    if (userDetails) {
      getPostsByUsername(username).then((res) => {
        if (res.success) {
          setUserPosts(res.data);
        }
        setLoading(false);
      });
    }
  }, [postsData]);
  if (loading)
    return (
      <div className="pt-5 text-center">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="flex flex-col gap-4 w-full p-1">
        <UserProfileCard
          username={username}
          userDetails={userDetails}
          userPosts={userPosts}
        />
        <main>
          {userPosts?.length > 0 ? <PostList posts={userPosts} /> : <NoPosts />}
        </main>
      </div>
    </>
  );
};

export default UserProfile;
