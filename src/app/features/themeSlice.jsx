import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") ?? "dark",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSwitcher: (state) => {
      const root = document.getElementById("root");
      if (localStorage.getItem("theme")) {
        if (state.theme === "dark") {
          localStorage.setItem("theme", "light");
          root.setAttribute("class", "light");
          state.theme = "light";
        } else {
          localStorage.setItem("theme", "dark");
          root.setAttribute("class", "dark");
          state.theme = "dark";
        }
      } else {
        localStorage.setItem("theme", "dark");
        root.setAttribute("class", "dark");
        state.theme = "dark";
      }
    },
    setDefaultTheme: (state) => {
      const currentTheme = localStorage.getItem("theme");
      const root = document.getElementById("root");
      if (currentTheme) {
        root.setAttribute("class", currentTheme);
        state.theme = currentTheme;
      } else {
        localStorage.setItem("theme", "dark");
        root.setAttribute("class", "dark");
        state.theme = "dark";
      }
    },
  },
});

export const { themeSwitcher, setDefaultTheme } = themeSlice.actions;
export const themeSelector = (state) => state.theme;

export default themeSlice.reducer;
