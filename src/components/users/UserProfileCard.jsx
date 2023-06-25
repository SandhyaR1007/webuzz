import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../app/features/authSlice";

import {
  followUser,
  unfollowUser,
  usersSelector,
} from "../../app/features/usersSlice";
import { getIsUserFollow } from "../../utils/postsHelper";
import EditProfile from "./EditProfile";
import CustomModal from "../common/CustomModal";

const UserProfileCard = ({ userDetails, userPosts }) => {
  const dispatch = useDispatch();
  const { encodedToken, foundUser } = useSelector(authSelector);
  const { usersData } = useSelector(usersSelector);
  const [showModal, setShowModal] = useState(false);

  const isFollowing = getIsUserFollow(
    foundUser._id,
    usersData,
    foundUser.username
  );
  return (
    <header className="flex items-start gap-5 shadow-md border border-gray-500 rounded-md p-4 bg-[--card-bg] text-[--primary-text]">
      <CustomModal
        modalComponent={
          <EditProfile userDetails={userDetails} setShowModal={setShowModal} />
        }
        showModal={showModal}
        setShowModal={setShowModal}
      />
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
              <button
                className={`py-0.5 px-5 btn-shadow bg-yellow btn-light`}
                onClick={() => setShowModal(true)}
              >
                Edit Profile
              </button>
            ) : (
              <button
                className={`py-0.5 px-3  ${
                  isFollowing
                    ? "bg-white border border-black"
                    : "bg-emerald-300"
                } btn-light`}
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
          <span className={` rounded-full text-sm py-1 px-4 bg-purple-100`}>
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
  );
};

export default UserProfileCard;
