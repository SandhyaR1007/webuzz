import React, { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { useParams } from "react-router";
import { getIsUserFollow, getUserByUsername } from "../utils/postsHelper";
import { useDispatch, useSelector } from "react-redux";
import {
  followUser,
  usersSelector,
  unfollowUser,
} from "../app/features/usersSlice";

import { getPostsByUsername } from "../apis/apiHelper";
import { PostList } from "../components";
import { postsSelector } from "../app/features/postsSlice";
import { authSelector } from "../app/features/authSlice";
const UserProfile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { usersData } = useSelector(usersSelector);
  const { postsData } = useSelector(postsSelector);
  const { encodedToken, foundUser } = useSelector(authSelector);

  const userDetails = getUserByUsername(usersData, username);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFollowing = getIsUserFollow(foundUser._id, usersData, username);
  console.log({ isFollowing });
  console.log({ userDetails });
  useEffect(() => {
    if (userDetails) {
      setLoading(true);
      getPostsByUsername(username).then((res) => {
        if (res.success) {
          setUserPosts(res.data);
        }
        setLoading(false);
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
  return (
    <>
      <div className="flex flex-col gap-4 w-full p-1">
        <header className="flex items-start gap-5 shadow-md border border-gray-500 rounded-md p-4">
          <section className="w-[9.8rem] h-[9.8rem] rounded-full  border-2 border-pink-400 flex items-center justify-center">
            <img
              src={userDetails?.profile}
              alt=""
              className="w-36 h-36 rounded-full object-cover"
            />
          </section>

          <section className="py-3 flex flex-col gap-4 w-2/3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">
                  {userDetails?.firstName} {userDetails?.lastName}
                </span>
                {foundUser?._id === userDetails?._id ? (
                  <button className="py-0.5 px-5 btn-shadow bg-yellow rounded-full">
                    Edit Profile
                  </button>
                ) : (
                  <button
                    className={`py-0.5 px-3 btn-shadow ${
                      isFollowing
                        ? "bg-white border border-black"
                        : "bg-emerald-300"
                    } rounded-full`}
                    onClick={() => {
                      if (isFollowing) {
                        dispatch(
                          unfollowUser({
                            encodedToken,
                            userId: userDetails?._id,
                          })
                        );
                      } else {
                        dispatch(
                          followUser({ encodedToken, userId: userDetails?._id })
                        );
                      }
                    }}
                  >
                    {isFollowing ? "UnFollow" : "Follow"}
                  </button>
                )}
              </div>
              <h2 className="text-gray-500">@{userDetails?.username}</h2>
              <p className="pt-2">{userDetails?.bio}</p>
            </div>
            <div className="flex items-center gap-5 text-gray-800">
              <span className="bg-purple-100 rounded-full text-sm py-1 px-4">
                {userPosts.length} Posts
              </span>
              <span className="bg-emerald-100 rounded-full text-sm py-1 px-4">
                {userDetails?.followers.length} Followers
              </span>
              <span className="bg-amber-100 rounded-full text-sm py-1 px-4">
                {userDetails?.following.length} Following
              </span>
            </div>
            <div className="flex items-center gap-1">
              <BiLink className="text-lg text-gray-500" />
              <a
                className=" hover:underline text-sm text-sky-500"
                href={userDetails?.portfolio}
              >
                {userDetails?.portfolio}
              </a>
            </div>
          </section>
        </header>
        <main>{<PostList posts={userPosts} />}</main>
      </div>
    </>
  );
};

export default UserProfile;
