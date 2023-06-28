import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userLogin } from "../app/features/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

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
    if (encodedToken) {
      navigate("/");
    }
  }, [encodedToken]);

  return (
    <div className="w-full flex align-center justify-center  h-screen bg-[--bg-color]">
      <div className="w-full   flex flex-col items-center  justify-center gap-5 px-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  gap-3  py-5 px-10 rounded-lg border shadow-md  w-full xs:w-96"
        >
          <h1 className="font-secondary text-3xl text-center">Webuzz</h1>

          <label htmlFor="username font-xl">
            <span className="text-sm  text-[--primary-text]">Username</span>
            <input
              id="username"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="px-2 py-1 bg-transparent w-full outline-none rounded-lg "
            />
          </label>
          <label htmlFor="password">
            <span className="text-sm font-semibold text-gray-600">
              {" "}
              Password
            </span>
            <input
              id="password"
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              className="px-2 py-1 border-rounded-dark w-full outline-none rounded-lg "
            />
          </label>
          <section className="flex flex-col gap-3">
            <button
              className="shadow-light mt-3 px-2 py-1 border-rounded-dark bg-purple font-semibold"
              type="submit"
              disabled={loggingIn}
            >
              Login
            </button>
            <button
              className="shadow-light px-2 py-1 border-rounded-dark bg-pink font-semibold"
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
    </div>
  );
};

export default Login;
