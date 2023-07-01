import { useDispatch, useSelector } from "react-redux";

import { authSelector } from "../../app/features/authSlice";
import { followUser } from "../../app/features/usersSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { truncateWithEllipses } from "../../utils/utils";

export const UsersCard = ({ userData, isFollow }) => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);

  const { firstName, lastName, username, profile } = userData;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <img
          src={profile}
          alt={username}
          className="w-10 h-10 rounded-lg border border-black object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm w-full overflow-hidden text-ellipsis">
            {firstName} {lastName}
          </h3>

          <Link
            to={`/userProfile/${userData.username}`}
            className="text-xs text-gray-400"
          >
            @{truncateWithEllipses(username)}
          </Link>
        </div>
      </div>
      {!isFollow && (
        <button
          disabled={clicked}
          onClick={() => {
            dispatch(followUser({ encodedToken, userId: userData._id }));
            setClicked(true);
          }}
          className="bg-pink-300  text-xs px-3 py-0.5 rounded-full border  shadow-[--shadow-sm] "
        >
          Follow
        </button>
      )}
    </div>
  );
};
