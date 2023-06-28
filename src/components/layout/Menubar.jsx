import React, { useEffect, useState } from "react";

import { AiFillCompass, AiOutlineLogout } from "react-icons/ai";
import { FaHome, FaUserNinja, FaFeatherAlt, FaBookmark } from "react-icons/fa";

import { useNavigate } from "react-router";
import { authSelector, logoutUser } from "../../app/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../common/CustomModal";
import NewPostCard from "../posts/NewPostCard";

const Menubar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    encodedToken,
    foundUser: { username, profile, firstName, lastName },
  } = useSelector(authSelector);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (encodedToken === null) {
      setTimeout(() => {
        navigate("/login");
      }, 200);
    }
  }, [encodedToken]);

  const menubarItems = [
    {
      name: "Home",
      icon: <FaHome className="text-2xl " />,
      handler: () => navigate("/"),
    },
    {
      name: "Explore",
      icon: <AiFillCompass className="text-2xl " />,
      handler: () => navigate("/explore"),
    },
    {
      name: "Bookmarks",
      icon: <FaBookmark className="text-xl  " />,
      handler: () => navigate("/bookmarks"),
    },
    {
      name: "New Post",
      icon: <FaFeatherAlt className="text-2xl " />,
      handler: () => setShowModal(true),
    },
    // {
    //   name: "Log Out",
    //   icon: <AiOutlineLogout className="text-xl " />,
    //   handler: () => dispatch(logoutUser()),
    // },
  ];
  return (
    <>
      <CustomModal
        modalComponent={<NewPostCard />}
        showModal={showModal}
        setShowModal={setShowModal}
        width={600}
      />
      <aside className="fixed bottom-0 sm:top-16  py-1 sm:py-5 border xs:border-0 w-full sm:w-[100px] md:w-[250px] bg-[--card-bg]">
        <ul className="w-full px-5 sm:px-0 sm:w-max xs:mx-auto   flex  sm:flex-col justify-between sm:justify-start gap-0 xs:gap-5     text-[--primary-text]">
          {menubarItems.map((item) => (
            <li
              key={item?.name}
              onClick={item?.handler}
              className="flex items-center  text-xl  gap-4  py-1 px-3 cursor-pointer rounded-full  hover:text-yellow-500 transition"
            >
              {item?.icon}
              <span className="hidden md:block">{item?.name}</span>
            </li>
          ))}

          <div
            className="shadow-sm cursor-pointer md:absolute bottom-20 flex items-center justify-between border border-gray-300 rounded-full p-1 md:px-4 md:py-2 bg-[--bg-color]"
            onClick={() => navigate(`/userProfile/${username}`)}
          >
            <div className="flex items-center gap-2 ">
              <img
                src={profile}
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
