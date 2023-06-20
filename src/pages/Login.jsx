import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userLogin } from "../app/features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { encodedToken, loggingIn, error } = useSelector(authSelector);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(userInfo));
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
          className="flex flex-col  gap-3 bg-lime py-5 px-10 border-rounded-dark btn-shadow-lg  w-full  md:w-[75%]"
        >
          <h1 className="text-2xl text-gray-800 text-center">Welcome back!</h1>
          <p className="text-red-500">{error}</p>
          <label htmlFor="username font-xl">
            <span className="text-lg">Username</span>
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
            <span className="text-lg"> Password</span>
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
              className=" btn-shadow mt-3 p-2 border-rounded-dark bg-purple font-semibold"
              type="submit"
              disabled={loggingIn}
            >
              Login
            </button>
            <button
              className=" btn-shadow p-2 border-rounded-dark bg-pink font-semibold"
              type="submit"
              disabled={loggingIn}
              onClick={() => {
                setUserInfo({
                  username: "oioioi_Satoru",
                  password: "Gojoishandsome",
                });
              }}
            >
              Login as Guest
            </button>
            <p className="text-center">
              Don't have an Account?{" "}
              <Link to="/signup" className="font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </section>
        </form>
      </div>
      <div className="hidden sm:block w-1/2 h-screen bg-purple"></div>
    </div>
  );
};

export default Login;
