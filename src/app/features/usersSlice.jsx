import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersApi } from "../../apis/apiServices";

const initialState = {
  usersData: [],
  currentUserId: "8c0aa5c2-864c-47d8-a490-e25cbae56be0",
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await getAllUsersApi();
    let usersList = [];

    if (response.status === 200) {
      usersList = response.data.users;
    }

    return usersList;
  } catch (err) {
    console.log({ err });
    return err;
  }
});
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {})
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersData = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {});
  },
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
