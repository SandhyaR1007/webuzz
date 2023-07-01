import React, { useEffect, useState } from "react";

import { AiFillCompass, AiOutlineLogout } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaHome, FaFeatherAlt, FaBookmark } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { authSelector, logoutUser } from "../../app/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../common/CustomModal";
import NewPostCard from "../posts/NewPostCard";
import CustomDropdownMenu from "../common/CustomDropdownMenu";

import SuggestedUsersList from "../users/SuggestedUsersList";
import { getUserByUsername } from "../../utils/postsHelper";
import { usersSelector } from "../../app/features/usersSlice";

const Menubar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const {
    encodedToken,
    foundUser: { username, firstName, lastName },
  } = useSelector(authSelector);
  const { usersData } = useSelector(usersSelector);
  const [showModal, setShowModal] = useState(null);
  const [selectedItem, setSelectedItem] = useState(
    pathname === "/" ? "home" : pathname?.split("/")[1]
  );
  const userDetails = getUserByUsername(usersData, username);
  useEffect(() => {
    if (encodedToken === null) {
      setTimeout(() => {
        navigate("/login");
      }, 200);
    }
  }, [encodedToken]);

  const menubarItems = [
    {
      name: "home",
      icon: <FaHome className="text-2xl " />,
      handler: () => {
        navigate("/");
        setSelectedItem("home");
      },
    },
    {
      name: "explore",
      icon: <AiFillCompass className="text-2xl " />,
      handler: () => {
        navigate("/explore");
        setSelectedItem("explore");
      },
    },

    {
      name: "new post",
      icon: <FaFeatherAlt className="text-2xl " />,
      handler: () => {
        setShowModal(<NewPostCard />);
        setSelectedItem("new post");
      },
    },
  ];

  const dropdownMenu = [
    {
      key: "1",
      label: (
        <span
          onClick={() => {
            navigate("/bookmarks");
            setSelectedItem("bookmarks");
          }}
        >
          Bookmarks
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            setShowModal(<SuggestedUsersList />);
            setSelectedItem("suggestions");
          }}
        >
          Suggestions
        </span>
      ),
    },
    {
      key: "3",
      label: <span onClick={() => dispatch(logoutUser())}>Log Out</span>,
    },
  ];

  return (
    <>
      <CustomModal
        modalComponent={showModal}
        showModal={showModal}
        setShowModal={setShowModal}
        width={600}
      />
      <aside className="z-20 fixed bottom-0 sm:top-16  py-1 sm:py-5  shadow-sm xs:border-0 w-full sm:w-[100px] md:w-[250px] bg-[--card-bg]">
        <ul className="w-full px-5 sm:px-0 sm:w-max xs:mx-auto   flex  sm:flex-col justify-between sm:justify-start gap-0 xs:gap-5     text-[--primary-text]">
          {menubarItems.map((item) => (
            <li
              key={item?.name}
              onClick={item?.handler}
              className={`flex items-center  text-xl  gap-4  py-1 px-3 cursor-pointer rounded-full  hover:text-yellow-500 transition ${
                selectedItem === item.name ? "text-yellow-500" : ""
              }`}
            >
              <span className="hover:scale-110 transition-all delay-75">
                {item?.icon}
              </span>
              <span className="hidden md:block capitalize">{item?.name}</span>
            </li>
          ))}

          <li
            onClick={() => {
              navigate("/bookmarks");
              setSelectedItem("bookmarks");
            }}
            className={`hidden sm:flex items-center  text-xl  gap-4  py-1 px-3 cursor-pointer rounded-full  hover:text-yellow-500 transition ${
              selectedItem === "bookmarks" ? "text-yellow-500" : ""
            }`}
          >
            <span className="hover:scale-110 transition-all delay-75">
              <FaBookmark className="text-xl  " />
            </span>
            <span className="hidden md:block capitalize">bookmarks</span>
          </li>
          <li
            onClick={() => dispatch(logoutUser())}
            className="hidden sm:flex items-center  text-xl  gap-4  py-1 px-3 cursor-pointer rounded-full  hover:text-yellow-500 transition"
          >
            <span className="hover:scale-110 transition-all delay-75">
              <AiOutlineLogout className="text-xl " />
            </span>
            <span className="hidden md:block capitalize">log out</span>
          </li>

          <li className="flex sm:hidden items-center  text-xl  gap-4  py-1 px-3 cursor-pointer rounded-full  hover:text-yellow-500 transition">
            <span className="hover:scale-110 transition-all delay-75">
              <CustomDropdownMenu
                dropdownMenu={dropdownMenu}
                icon={<BsThreeDots className="text-xl " />}
              />
            </span>
          </li>

          <div
            className="shadow-sm cursor-pointer sm:absolute bottom-20 flex items-center justify-between border border-gray-300 rounded-full p-1 md:px-4 md:py-2 bg-[--bg-color]"
            onClick={() => navigate(`/userProfile/${username}`)}
          >
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis  whitespace-nowrap">
              <img
                src={userDetails?.profile}
                alt={username}
                className="w-10 h-10 rounded-full border border-black object-cover"
              />
              <div className="hidden md:flex flex-col">
                <h1 className="font-semibold ">
                  {firstName} {lastName}
                </h1>

                <span className="text-xs  text-gray-400">@{username}</span>
              </div>
            </div>
          </div>
        </ul>
      </aside>
    </>
  );
};

export default Menubar;
