import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSignup } from "../app/features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { avatars, signupImg } from "../utils/constants";
import { scrollToTop } from "../utils/utils";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { encodedToken, signingUp } = useSelector(authSelector);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    profile: avatars[2],
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignup(userInfo));
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (encodedToken) {
      navigate("/");
    }
  }, [encodedToken]);

  return (
    <div className="w-full flex align-center justify-center  h-screen bg-[#17181c]">
      <div className="w-full sm:w-1/2   flex flex-col items-center  justify-center gap-5 px-1 sm:px-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  gap-4  pb-10 sm:py-5 px-5 lg:px-14 rounded-lg    w-full "
        >
          <h1 className="text-orange-400 font-secondary text-4xl sm:text-5xl text-center drop-shadow-lg">
            Webuzz
          </h1>
          <p className="text-gray-300 text-center text-xs  py-1">
            Welcome to the Webuzz, where your journey starts as a ninja.
            Dattebayo!!
          </p>

          <div className="flex gap-3">
            <label htmlFor="firstName" className="flex-1">
              <input
                placeholder="First Name"
                required
                id="firstName"
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
                className="border border-gray-600 px-2  text-sm py-1 sm:py-2 bg-[#1e1f23] text-gray-50  w-full outline-none rounded-lg "
              />
            </label>
            <label htmlFor="lastName" className="flex-1">
              <input
                placeholder="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
                className="border border-gray-600 px-2  text-sm py-1 sm:py-2 bg-[#1e1f23] text-gray-50  w-full outline-none rounded-lg "
              />
            </label>
          </div>
          <label htmlFor="email">
            <input
              placeholder="Email"
              required
              id="email"
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="border border-gray-600 px-2 py-1 text-sm py-1 sm:py-2 bg-[#1e1f23] text-gray-50  w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="username">
            <input
              placeholder="Username"
              required
              id="username"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="border border-gray-600 px-2  text-sm py-1 sm:py-2 bg-[#1e1f23] text-gray-50  w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="password">
            <div className="relative">
              <input
                placeholder="Password"
                required
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
                className="border border-gray-600 px-2 py-1 text-sm py-1 sm:py-2 bg-[#1e1f23] text-gray-50  w-full outline-none rounded-lg "
              />
              <span
                className="absolute right-1 top-3 cursor-pointer text-gray-50"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </label>
          <section className="flex flex-col gap-3">
            <button
              className="border px-2 py-1 text-sm  sm:py-2 border-rounded-dark bg-orange-400 font-semibold"
              type="submit"
              disabled={signingUp}
            >
              {signingUp ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="text-center text-gray-300">
              Already have an Account?{" "}
              <Link
                to={signingUp ? "" : "/login"}
                className="font-semibold hover:underline text-orange-400"
              >
                Login
              </Link>
            </p>
          </section>
        </form>
      </div>
      <div className="w-3/4 hidden sm:block">
        <img
          src={signupImg}
          alt="signupImg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
