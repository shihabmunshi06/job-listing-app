import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.push(action.payload);
    },
    removeTag: (state, action) => {
      const newState = state.filter((e) => e !== action.payload);
      return newState;
    },
    removeAllTags: () => {
      return [];
    },
  },
});

export default tagsSlice.reducer;
export const { addTag, removeTag, removeAllTags } = tagsSlice.actions;
