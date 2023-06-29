import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { usersSelector } from "../../app/features/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
const Search = () => {
  const { usersData } = useSelector(usersSelector);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setSearching(true);
    let id = setTimeout(() => {
      setFoundUsers(searchUser());
      setSearching(false);
    }, 400);

    return () => {
      clearTimeout(id);
    };
  }, [searchQuery]);
  const searchUser = () =>
    searchQuery.length > 0
      ? usersData.filter(
          ({ firstName, lastName, username }) =>
            firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div className="w-60 sm:w-80 relative">
      <label
        className={`flex bg-gray-500/10 border border-[--border-color] rounded-full  items-center gap-3 py-1 sm:py-2  px-3 sm:px-4 w-full`}
      >
        <BsSearch />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search User"
          className=" outline-none bg-transparent text-sm w-full"
        />
      </label>
      {searchQuery.length > 0 && (
        <ul className="border border-[--border-color] mt-1 absolute  z-1000 bg-[--card-bg] w-full shadow-sm p-1 rounded-lg text-[--primary-text]">
          {searching ? (
            <div className="text-center">
              {" "}
              <Loader />
            </div>
          ) : foundUsers.length === 0 ? (
            <p className="text-center text-[--primary-text]">No User Found</p>
          ) : (
            foundUsers.map(({ profile, username, firstName, lastName }) => (
              <li
                className="cursor-pointer hover:bg-black/10 text-sm p-2 border-b border-[--border-color]"
                onClick={() => {
                  navigate(`/userProfile/${username}`);
                  setSearchQuery("");
                }}
              >
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

                    <span className="text-xs text-gray-400">@{username}</span>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
