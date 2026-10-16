import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",

  initialState: {
    items: []
  },

  reducers: {
    addToFavorites: (state, action) => {
      // TODO: Get the article from action.payload.
      // TODO: Check whether an article with the same id exists.
      // TODO: Add the article only if it does not already exist.
    },

    removeFromFavorites: (state, action) => {
      // TODO: Remove the article whose id matches the payload.
    },

    clearFavorites: state => {
      // TODO: Remove all articles from the favorites list.
    }
  }
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
