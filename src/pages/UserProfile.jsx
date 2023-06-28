import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { getUserByUsername } from "../utils/postsHelper";
import { useSelector } from "react-redux";
import { usersSelector } from "../app/features/usersSlice";

import { getPostsByUsername } from "../services/apiHelper";
import { PostList, UserProfileCard } from "../components";
import { postsSelector } from "../app/features/postsSlice";

const UserProfile = () => {
  const { username } = useParams();
  const { usersData } = useSelector(usersSelector);
  const { postsData } = useSelector(postsSelector);

  const userDetails = getUserByUsername(usersData, username);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  if (loading) return <h1>Loading.....</h1>;
  return (
    <>
      <div className="flex flex-col gap-4 w-full p-1">
        <UserProfileCard userDetails={userDetails} userPosts={userPosts} />
        <main>{<PostList posts={userPosts} />}</main>
      </div>
    </>
  );
};

export default UserProfile;
