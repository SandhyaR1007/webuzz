import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userLogin } from "../app/features/authSlice";
import { useNavigate } from "react-router";

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
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
          className="p-2 "
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
          className="p-2 "
        />
        <button type="submit" disabled={loggingIn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
