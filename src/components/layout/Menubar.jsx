import React, { useEffect } from "react";

import {
  AiOutlineHome,
  AiFillCompass,
  AiOutlineUser,
  AiOutlineLogout,
  AiFillStar,
} from "react-icons/ai";

import { useNavigate } from "react-router";
import { authSelector, logoutUser } from "../../app/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Menubar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    encodedToken,
    foundUser: { username },
  } = useSelector(authSelector);
  useEffect(() => {
    if (encodedToken === null) {
      setTimeout(() => {
        navigate("/login");
      }, 200);
    }
  }, [encodedToken]);
  return (
    <aside className="fixed bottom-0 sm:top-16  py-5 border xs:border-0 w-full sm:w-[15vw] lg:w-[20vw] bg-[--bg-color]">
      <ul className="w-max xs:mx-auto   flex  sm:flex-col justify-between sm:justify-start gap-0 xs:gap-5      text-[--primary-text]">
        <li
          onClick={() => navigate("/")}
          className="flex items-center  text-xl  gap-4  py-1 px-3 cursor-pointer hover:text-emerald-500 transition"
        >
          <AiOutlineHome className="text-2xl " />
          <span className="hidden md:block">Home</span>
        </li>
        <li
          onClick={() => navigate("/explore")}
          className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition"
        >
          {" "}
          <AiFillCompass className="text-2xl " />
          <span className="hidden md:block">Explore</span>
        </li>
        <li className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition">
          {" "}
          <AiFillStar className="text-xl  " />
          <span className="hidden md:block">Bookmark</span>
        </li>
        <li
          className="flex items-center  text-xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition"
          onClick={() => {
            navigate(`/userProfile/${username}`);
          }}
        >
          {" "}
          <AiOutlineUser className="text-2xl " />
          <span className="hidden md:block">Profile</span>
        </li>
        <li
          className="md:absolute bottom-20 flex items-center justify-center  text-xl  gap-3  py-1   px-5 cursor-pointer md:bg-purple-400 btn-light max-w-min transition"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          {" "}
          <AiOutlineLogout className="text-2xl " />
          <span className="hidden md:block">Logout</span>
        </li>
      </ul>
    </aside>
  );
};

export default Menubar;
