import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    items: [
      { id: 1, title: "React Hooks", author: "John" },
      { id: 2, title: "Redux Toolkit", author: "Sarah" },
      { id: 3, title: "React Router", author: "Meera" },
    ],
  },
  reducers: {},
});

export default articlesSlice.reducer;
