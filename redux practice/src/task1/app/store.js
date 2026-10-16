import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articlesSlice";
import favoritesReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    // TODO: Register the favorites reducer here
    // use name favorites

  },
});
