import React from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "../../app/features/usersSlice";
import { UsersCard } from "./UsersCard";
import { authSelector } from "../../app/features/authSlice";
import { themeSelector } from "../../app/features/themeSlice";

const SuggestedUsers = () => {
  const { foundUser } = useSelector(authSelector);
  const currentUserId = foundUser?._id;
  const { usersData } = useSelector(usersSelector);
  const { theme } = useSelector(themeSelector);
  const currentUser = usersData.find(({ _id }) => _id === currentUserId);
  const suggestedUsers = usersData?.filter(
    ({ _id }) =>
      _id !== currentUserId &&
      currentUser?.following.every((data) => data._id !== _id)
  );

  return (
    <div className="hidden border border-gray-700 lg:block fixed w-[300px]  right-0  me-1 top-20  max-h-[80vh]  pb-10   px-5 rounded-lg overflow-y-scroll bg-[--card-bg] text-[--primary-text]">
      <h1 className="text-2xl  py-5 font-secondary">Who to follow</h1>
      <div className="flex flex-col gap-6">
        {suggestedUsers?.map((data) => (
          <UsersCard key={data._id} userData={data} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
