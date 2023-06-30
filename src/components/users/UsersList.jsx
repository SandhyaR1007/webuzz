import React from "react";

import { UsersCard } from "./UsersCard";

const UsersList = ({ usersArr, isFollow }) => {
  return (
    <div className="flex flex-col gap-6  ">
      {usersArr?.length > 0 ? (
        usersArr?.map((data) => (
          <UsersCard isFollow={isFollow} key={data._id} userData={data} />
        ))
      ) : (
        <h3>No Users Found</h3>
      )}
    </div>
  );
};

export default UsersList;
