import React from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "../../app/features/usersSlice";
import { authSelector } from "../../app/features/authSlice";

import UsersList from "./UsersList";

const SuggestedUsersList = () => {
  const { foundUser } = useSelector(authSelector);
  const currentUserId = foundUser?._id;
  const { usersData } = useSelector(usersSelector);

  const currentUser = usersData.find(({ _id }) => _id === currentUserId);
  const suggestedUsers = usersData?.filter(
    ({ _id }) =>
      _id !== currentUserId &&
      currentUser?.following.every((data) => data._id !== _id)
  );
  return <UsersList usersArr={suggestedUsers} />;
};

export default SuggestedUsersList;
