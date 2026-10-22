import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    items: [
      { id: 1, title: "JavaScript Closures", author: "Kabir" },
      { id: 2, title: "Node.js Streams", author: "Priya" },
      { id: 3, title: "TypeScript Generics", author: "Rohan" },
    ],
  },
  reducers: {},
});

export default articlesSlice.reducer;
