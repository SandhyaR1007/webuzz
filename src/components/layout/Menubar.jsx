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
    foundUser: { username },
  } = useSelector(authSelector);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (encodedToken === null) {
      setTimeout(() => {
        navigate("/login");
      }, 200);
    }
  }, [encodedToken]);
  return (
    <>
      <CustomModal
        modalComponent={<NewPostCard />}
        showModal={showModal}
        setShowModal={setShowModal}
        width={600}
      />
      <aside className="fixed bottom-0 sm:top-16  py-5 border xs:border-0 w-full sm:w-[15vw] lg:w-[20vw] bg-[--card-bg]">
        <ul className="w-max xs:mx-auto   flex  sm:flex-col justify-between sm:justify-start gap-0 xs:gap-5     text-[--primary-text]">
          <li
            onClick={() => navigate("/")}
            className="flex items-center  text-xl  gap-4  py-1 px-3 cursor-pointer rounded-full  hover:text-yellow-500 transition"
          >
            <FaHome className="text-2xl " />
            <span className="hidden md:block">Home</span>
          </li>
          <li
            onClick={() => navigate("/explore")}
            className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-yellow-500 transition"
          >
            {" "}
            <AiFillCompass className="text-2xl " />
            <span className="hidden md:block">Explore</span>
          </li>
          <li
            onClick={() => navigate("/bookmarks")}
            className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-yellow-500 transition"
          >
            {" "}
            <FaBookmark className="text-xl  " />
            <span className="hidden md:block">Bookmarks</span>
          </li>
          <li
            className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-yellow-500 transition"
            onClick={() => {
              navigate(`/userProfile/${username}`);
            }}
          >
            {" "}
            <FaUserNinja className="text-2xl " />
            <span className="hidden md:block">Profile</span>
          </li>
          <li
            className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-yellow-500 transition"
            onClick={() => {
              setShowModal(true);
            }}
          >
            {" "}
            <FaFeatherAlt className="text-2xl " />
            <span className="hidden md:block">New Post</span>
          </li>
          <li
            className="hidden md:absolute bottom-20 md:flex items-center justify-center  text-lg  gap-3  py-1   px-5 cursor-pointer md:bg-blue-300 btn-light max-w-min transition"
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            {" "}
            <AiOutlineLogout className="text-xl " />
            <span className="hidden md:block">Logout</span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Menubar;
