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
import UsersList from "./UsersList";
import { themeSelector } from "../../app/features/themeSlice";

const UserProfileCard = ({ username, userDetails, userPosts }) => {
  const dispatch = useDispatch();
  const { encodedToken, foundUser } = useSelector(authSelector);
  const {
    usersData,
    disabled: { followDisabled, editDisabled },
  } = useSelector(usersSelector);
  const { theme } = useSelector(themeSelector);
  const [showModal, setShowModal] = useState(null);

  const isFollowing = getIsUserFollow(username, usersData, foundUser?.username);

  return (
    <header className="flex  sm:items-start gap-1 xs:gap-7 sm:gap-5 md:gap-5 shadow-md border border-gray-500 rounded-md p-1 sm:p-4 bg-[--card-bg] text-[--primary-text]">
      <CustomModal
        modalComponent={showModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <section className="w-[5.8rem] h-[5.8rem] lg:w-[8.8rem] lg:h-[8.8rem] rounded-full  border-2 border-pink-400 flex items-center justify-center">
        <img
          src={userDetails?.profile}
          alt=""
          className="w-20 h-20 lg:w-32 lg:h-32 rounded-full object-cover"
        />
      </section>

      <section className="py-3 flex flex-col gap-4 w-2/3">
        <div>
          <div className="flex items-center justify-between">
            <span className="sm:text-xl">
              {userDetails?.firstName} {userDetails?.lastName}
            </span>
            {foundUser?._id === userDetails?._id ? (
              <>
                <button
                  disabled={editDisabled}
                  className={`hidden xs:block text-xs sm:text-base py-0.5 px-2 sm:px-5 btn-shadow bg-yellow border border-black text-black rounded-full ${
                    theme === "dark" ? "shadow-dark" : "shadow-light"
                  }`}
                  onClick={() =>
                    setShowModal(
                      <EditProfile
                        userDetails={userDetails}
                        setShowModal={setShowModal}
                        editDisabled={editDisabled}
                      />
                    )
                  }
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <button
                disabled={followDisabled}
                className={`text-xs sm:text-base py-0.5 px-3  ${
                  isFollowing
                    ? "bg-white border border-black"
                    : "bg-emerald-300"
                } border border-black text-black rounded-full ${
                  theme === "dark" ? "shadow-dark" : "shadow-light"
                } disabled:cursor-not-allowed`}
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
          <h2 className="text-xs sm:text-base text-gray-500">
            @{userDetails?.username}
          </h2>
          <p className="pt-2 text-sm">{userDetails?.bio}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1 sm:gap-5 text-gray-800">
          <span
            className={`text-[0.6rem] sm:text-sm rounded-full  py-0.5 px-3 sm:py-1 sm:px-4 bg-purple-300 `}
          >
            {userPosts.length} Posts
          </span>
          <span
            onClick={() =>
              setShowModal(
                <UsersList isFollow usersArr={userDetails?.followers} />
              )
            }
            className="cursor-pointer bg-emerald-300 rounded-full text-[0.6rem] sm:text-sm py-0.5 px-3 sm:py-1 sm:px-4"
          >
            {userDetails?.followers.length} Followers
          </span>
          <span
            onClick={() =>
              setShowModal(
                <UsersList isFollow usersArr={userDetails?.following} />
              )
            }
            className="cursor-pointer bg-amber-300 rounded-full text-[0.6rem] sm:text-sm py-0.5 px-3 sm:py-1 sm:px-4"
          >
            {userDetails?.following?.length} Following
          </span>
        </div>
        {userDetails?.portfolio && (
          <div className="flex items-center gap-1">
            <BiLink className="text-sm sm:text-lg text-gray-500" />
            <a
              className=" hover:underline text-xs sm:text-sm text-sky-500"
              href={userDetails?.portfolio}
            >
              {userDetails?.portfolio}
            </a>
          </div>
        )}
      </section>
    </header>
  );
};

export default UserProfileCard;
