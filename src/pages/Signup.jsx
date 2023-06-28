import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSignup } from "../app/features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { avatars } from "../utils/constants";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { encodedToken, loggingIn, signupError } = useSelector(authSelector);
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
    if (encodedToken) {
      navigate("/");
    }
  }, [encodedToken]);

  return (
    <div className="w-full flex align-center justify-center  h-screen bg-[--bg-color]">
      <div className="w-full   flex flex-col items-center  justify-center gap-5 px-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  gap-3 bg-white py-5 px-10 rounded-lg border shadow-md  w-full xs:w-96"
        >
          <h1 className="font-secondary text-3xl text-center">Webuzz</h1>

          <div className="flex gap-3">
            <label htmlFor="firstName">
              <span className="text-sm font-semibold text-gray-600">
                First Name
              </span>
              <input
                required
                id="firstName"
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
                className="px-2 py-1 border-rounded-dark w-full outline-none rounded-lg "
              />
            </label>
            <label htmlFor="lastName">
              <span className="text-sm font-semibold text-gray-600">
                Last Name
              </span>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
                className="px-2 py-1 border-rounded-dark w-full outline-none rounded-lg "
              />
            </label>
          </div>
          <label htmlFor="email">
            <span className="text-sm font-semibold text-gray-600"> Email</span>
            <input
              required
              id="email"
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="px-2 py-1 border-rounded-dark w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="username">
            <span className="text-sm font-semibold text-gray-600">
              Username
            </span>
            <input
              required
              id="username"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="px-2 py-1 border-rounded-dark w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="password">
            <span className="text-sm font-semibold text-gray-600">
              Password
            </span>
            <div className="relative">
              <input
                required
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
                className="px-2 py-1 border-rounded-dark w-full outline-none rounded-lg "
              />
              <span
                className="absolute right-1 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </label>
          <section className="flex flex-col gap-3">
            <button
              className="shadow-light px-2 py-1 border-rounded-dark bg-purple font-semibold"
              type="submit"
              disabled={loggingIn}
            >
              Sign Up
            </button>

            <p className="text-center">
              Already have an Account?{" "}
              <Link to="/login" className="font-semibold hover:underline">
                Login
              </Link>
            </p>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Signup;
