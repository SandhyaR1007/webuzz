import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../../apis/apiServices";

const initialState = {
  encodedToken: localStorage.getItem("encodedToken"),
  foundUser: localStorage.getItem("foundUser")
    ? JSON.parse(localStorage.getItem("foundUser"))
    : null,
  loggingIn: false,
  error: false,
};
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ username, password }) => {
    try {
      const response = await postLogin(username, password);
      console.log({ response });
      if (response.status === 200) {
        return {
          encodedToken: response.data.encodedToken,
          foundUser: response.data.foundUser,
        };
      }
      return {};
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loggingIn = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loggingIn = false;
        state.encodedToken = action.payload.encodedToken;
        localStorage.setItem("encodedToken", action.payload.encodedToken);
        state.foundUser = action.payload.foundUser;
        localStorage.setItem(
          "foundUser",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userLogin.rejected, (state) => {
        state.loggingIn = false;
      });
  },
});
export const authSelector = (state) => state.auth;
export default authSlice.reducer;
