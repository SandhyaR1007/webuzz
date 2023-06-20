import React, { useEffect } from "react";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router";
import { authSelector, logoutUser } from "../../app/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Menubar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  useEffect(() => {
    if (encodedToken === null) {
      setTimeout(() => {
        navigate("/login");
      }, 200);
    }
  }, [encodedToken]);
  return (
    <ul className="bg-red-300 fixed bottom-0 md:top-[4.75rem] flex  md:flex-col justify-between md:justify-start gap-0 xs:gap-5   py-5 px-3  xs:ps-16 border xs:border-0 w-full md:w-[25vw] lg:w-[21vw] ">
      <li
        onClick={() => navigate("/")}
        className="flex items-center  text-2xl  gap-4  py-1 px-3 cursor-pointer hover:text-emerald-500 transition"
      >
        <AiOutlineHome className="text-2xl " />
        <span className="hidden md:block">Home</span>
      </li>
      <li
        onClick={() => navigate("/explore")}
        className="flex items-center  text-2xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition"
      >
        {" "}
        <AiOutlineCompass className="text-2xl " />
        <span className="hidden md:block">Explore</span>
      </li>
      <li className="flex items-center  text-2xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition">
        {" "}
        <BsBookmark className="text-2xl  " />
        <span className="hidden md:block">Bookmark</span>
      </li>
      <li
        className="flex items-center  text-2xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition"
        onClick={() => {}}
      >
        {" "}
        <BiUserCircle className="text-2xl " />
        <span className="hidden md:block">Profile</span>
      </li>
      <li
        className="flex items-center  text-2xl  gap-4  py-1   px-3 cursor-pointer hover:text-emerald-500 transition"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        {" "}
        <BiLogOut className="text-2xl " />
        <span className="hidden md:block">Logout</span>
      </li>
    </ul>
  );
};

export default Menubar;
