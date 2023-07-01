import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userLogin } from "../app/features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { loginImg } from "../utils/constants";
import { scrollToTop } from "../utils/utils";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { encodedToken, loggingIn } = useSelector(authSelector);
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
    scrollToTop();
  }, []);
  useEffect(() => {
    if (encodedToken) {
      navigate("/");
    }
  }, [encodedToken]);

  return (
    <div className="w-full flex align-center justify-center  h-screen bg-[#17181c]">
      <div className="w-full sm:w-1/2   flex flex-col items-center  justify-center gap-5 px-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  gap-3  py-5 px-5 lg:px-14 rounded-lg    w-full  "
        >
          <h1 className="text-blue-400 font-secondary text-5xl text-center drop-shadow-lg">
            Webuzz
          </h1>
          <p className="text-gray-300 text-center">
            Welcome back to Webuzz, where your journey continues.
          </p>

          <label htmlFor="username" className="text-xl mt-5">
            <span className="text-gray-50 mb-1 text-sm">Username</span>
            <input
              id="username"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="border border-gray-600 px-2 text-sm py-1.5 sm:py-2.5 bg-[#1e1f23] text-gray-50 w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="password">
            <span className="text-gray-50 mb-1 text-sm"> Password</span>
            <input
              id="password"
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              className="focus:bg-[#1e1f23] border border-gray-600 px-2 text-sm py-1.5 sm:py-2.5 bg-[#1e1f23] text-gray-50 w-full outline-none rounded-lg "
            />
          </label>
          <section className="flex flex-col gap-3">
            <button
              className="mt-3 px-2 py-2 border-rounded-dark bg-blue-400 font-semibold"
              type="submit"
              disabled={loggingIn}
            >
              {loggingIn ? "Logging In..." : "Login"}
            </button>
            <button
              className=" border px-2 py-2 border-rounded-dark bg-purple-400 font-semibold"
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
            <p className="text-center text-gray-300">
              Don't have an Account?{" "}
              <Link
                to={loggingIn ? "" : "/signup"}
                className="font-semibold hover:underline text-blue-400"
              >
                Sign Up
              </Link>
            </p>
          </section>
        </form>
      </div>
      <div className="w-3/4 hidden sm:block">
        <img
          src={loginImg}
          alt="loginImg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
