import { createSlice, createSelector } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: { theme: "light", authcard: false, likedid: null },
  reducers: {
    toogleThemeState: (state, action) => {
      const mode = state.theme === "light" ? "dark" : "light";
      state.theme = mode;
    },

    setAuthCardState: (state, action) => {
      state.authcard = action.payload;
    },

    setLikedIdState: (state, action) => {
      state.likedid = action.payload;
    },

    removeLikedIdState: (state, action) => {
      state.likedid = null;
    },
  },
});

export const {
  toogleThemeState,
  setAuthCardState,
  setLikedIdState,
  removeLikedIdState,
} = ui.actions;

export const selectors = {
  getTheme: createSelector(
    (state) => state.ui,
    (ui) => ui
  ),
};

export default ui.reducer;
