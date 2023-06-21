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
    <ul className="bg-amber-400 md:bg-transparent fixed bottom-0 md:top-[4.75rem] flex  md:flex-col justify-between md:justify-start gap-0 xs:gap-5   py-5 px-3  xs:ps-16 border xs:border-0 w-full md:w-[25vw] lg:w-[21vw] ">
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
  );
};

export default Menubar;
