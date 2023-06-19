import React, { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { useParams } from "react-router";
import { getUserByUserId } from "../utils/postsHelper";
import { useSelector } from "react-redux";
import { usersSelector } from "../app/features/usersSlice";

import { getPostsByUsername } from "../apis/apiHelper";
import { PostList } from "../components";
import { postsSelector } from "../app/features/postsSlice";
const UserProfile = () => {
  const { userId } = useParams();

  const { usersData } = useSelector(usersSelector);
  const { postsData } = useSelector(postsSelector);

  const userDetails = getUserByUserId(usersData, userId);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log({ userDetails });
  useEffect(() => {
    if (userDetails) {
      setLoading(true);
      getPostsByUsername(userDetails._id).then((res) => {
        if (res.success) {
          setUserPosts(res.data);
        }
        setLoading(false);
      });
    }
  }, [userDetails]);
  useEffect(() => {
    if (userDetails) {
      getPostsByUsername(userDetails._id).then((res) => {
        if (res.success) {
          setUserPosts(res.data);
        }
        setLoading(false);
      });
    }
  }, [postsData]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-col gap-4 w-full p-1">
          <header className="flex items-start gap-5 bg-gray-100 rounded-md p-3">
            <section className="w-[9.8rem] h-[9.8rem] rounded-full  border border-gray-700 flex items-center justify-center">
              <img
                src={userDetails?.profile}
                alt=""
                className="w-36 h-36 rounded-full object-cover"
              />
            </section>

            <section className="py-3 flex flex-col gap-1 w-2/3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">
                    {userDetails?.firstName} {userDetails?.lastName}
                  </span>
                  <button className="py-0.5 px-3 border">Follow</button>
                </div>
                <h2 className="text-gray-500">@{userDetails?.userhandle}</h2>
                <p>{userDetails?.bio}</p>
              </div>
              <div className="flex items-center gap-5 text-gray-600">
                <span>{userPosts.length} Posts</span>
                <span>{userDetails?.followers.length} Followers</span>
                <span>{userDetails?.following.length} Following</span>
              </div>
              <div className="flex items-center gap-1">
                <BiLink className="text-lg text-gray-500" />
                <a
                  className="text-sky-400 hover:underline"
                  href={userDetails?.portfolio}
                >
                  {userDetails?.portfolio}
                </a>
              </div>
            </section>
          </header>
          <main>{<PostList posts={userPosts} />}</main>
        </div>
      )}
    </>
  );
};

export default UserProfile;
