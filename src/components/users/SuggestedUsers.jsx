import React from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "../../app/features/usersSlice";
import { UsersCard } from "./UsersCard";

const SuggestedUsers = () => {
  const { currentUserId, usersData } = useSelector(usersSelector);
  const currentUser = usersData.find(({ _id }) => _id === currentUserId);
  const suggestedUsers = usersData.filter(
    ({ _id }) =>
      _id !== currentUserId &&
      currentUser.following.every((data) => data._id !== _id)
  );

  return (
    <div className="fixed  max-h-screen w-80 pb-10 border border-black  px-5 rounded-lg">
      <h1 className="text-2xl  py-5 font-secondary">Who to follow</h1>
      <div className="flex flex-col gap-3">
        {suggestedUsers.map((data) => (
          <UsersCard userData={data} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
