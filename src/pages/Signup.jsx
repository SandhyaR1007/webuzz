import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSignup } from "../app/features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { encodedToken, loggingIn, error } = useSelector(authSelector);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
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
    <div className="w-full flex">
      <div className="w-full sm:w-1/2 h-screen bg-yellow flex flex-col items-center  justify-center gap-10 px-5">
        <h1 className="font-secondary text-6xl">Webuzz</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  gap-3 bg-lime py-5 px-10 border-rounded-dark shadow-light-lg  w-full md:w-[75%]"
        >
          <p className="text-red-500">{error}</p>

          <div className="flex gap-3">
            <label htmlFor="firstName">
              <span className="">First Name</span>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
                className="p-2 border-rounded-dark w-full outline-none rounded-lg "
              />
            </label>
            <label htmlFor="lastName">
              <span className="">Last Name</span>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
                className="p-2 border-rounded-dark w-full outline-none rounded-lg "
              />
            </label>
          </div>
          <label htmlFor="email">
            <span className=""> Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="p-2 border-rounded-dark w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="username">
            <span className="">Username</span>
            <input
              id="username"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="p-2 border-rounded-dark w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="password">
            <span className="">Password</span>
            <input
              id="password"
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              className="p-2 border-rounded-dark w-full outline-none rounded-lg "
            />
          </label>
          <section className="flex flex-col gap-3">
            <button
              className="shadow-light p-2 border-rounded-dark bg-purple font-semibold"
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
      <div className="hidden sm:block w-1/2 h-screen bg-purple"></div>
    </div>
  );
};

export default Signup;
