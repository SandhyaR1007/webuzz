import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postLogin, postSignup } from "../../services/apiServices";
import { notify } from "../../utils/toastify";

const initialState = {
  encodedToken:
    localStorage.getItem("encodedToken") &&
    localStorage.getItem("encodedToken") !== "undefined"
      ? localStorage.getItem("encodedToken")
      : null,
  foundUser:
    !localStorage.getItem("foundUser") ||
    localStorage.getItem("foundUser") == "undefined"
      ? null
      : JSON.parse(localStorage.getItem("foundUser")),
  loggingIn: false,
  loginError: null,
  signupError: null,
  signingUp: false,
};
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await postLogin(username, password);
      console.log({ response });
      if (response.status === 200) {
        notify("success", "Successfully Logged In");
        return {
          encodedToken: response.data.encodedToken,
          foundUser: response.data.foundUser,
        };
      }
      return {};
    } catch (err) {
      console.log(err);
      notify("error", err?.response?.data?.errors[0] ?? err.message);
      return rejectWithValue(err?.response?.data?.errors[0] ?? err.message);
    }
  }
);
export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await postSignup(userInfo);
      console.log({ response });
      if (response.status === 201) {
        notify("success", "Successfully Signed Up");
        return {
          encodedToken: response.data.encodedToken,
          foundUser: response.data.createdUser,
        };
      }
      return {};
    } catch (err) {
      console.log(err);
      notify("error", err?.response?.data?.errors[0] ?? err.message);
      return rejectWithValue(err?.response?.data?.errors[0] ?? err.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("foundUser");
      state.encodedToken = null;
      state.foundUser = null;
      notify("info", "Successfully Logged Out");
    },
  },
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
      .addCase(userLogin.rejected, (state, action) => {
        state.loggingIn = false;
        state.loginError = action.payload;
      })
      .addCase(userSignup.pending, (state) => {
        state.signingUp = true;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.signingUp = false;
        state.encodedToken = action.payload.encodedToken;
        localStorage.setItem("encodedToken", action.payload.encodedToken);
        state.foundUser = action.payload.foundUser;
        localStorage.setItem(
          "foundUser",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.signingUp = false;
        state.signupError = action.payload;
      });
  },
});
export const authSelector = (state) => state.auth;

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
