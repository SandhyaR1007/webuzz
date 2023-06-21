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
    <div
      className={`hidden lg:block fixed w-[25vw]  right-5 top-20  max-h-[80vh]  pb-10   px-5 rounded-lg overflow-y-scroll ${
        theme === "light" ? "bg-slate-50" : "bg-mid-black"
      }`}
    >
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
