import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      let root = document.body;
      if (action.payload === "dark") {
        state.theme = action.payload;

        root.style.backgroundColor = "#151515";
        root.style.color = "rgb(246, 246, 246)";
      } else {
        state.theme = action.payload;
        root.style.backgroundColor = "rgb(246, 246, 246)";
        root.style.color = "#000";
      }
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export const themeSelector = (state) => state.theme;

export default themeSlice.reducer;
