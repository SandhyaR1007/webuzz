import { useDispatch, useSelector } from "react-redux";

import { authSelector } from "../../app/features/authSlice";
import { followUser } from "../../app/features/usersSlice";
import { Link } from "react-router-dom";

export const UsersCard = ({ userData }) => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  const { firstName, lastName, username, profile } = userData;

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <img
          src={profile}
          alt={username}
          className="w-10 h-10 rounded-lg border border-black object-cover"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold ">
            {firstName} {lastName}
          </h1>

          <Link
            to={`/userProfile/${userData.username}`}
            className="text-xs text-gray-400"
          >
            @{username}
          </Link>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(followUser({ encodedToken, userId: userData._id }));
        }}
        className={`bg-pink-300  text-sm px-3 py-0.5 rounded-full border border-black btn-shadow text-black`}
      >
        Follow
      </button>
    </div>
  );
};
