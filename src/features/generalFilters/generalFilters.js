import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  currentId: "",
  currentData: "",
};

const generalFilterSlice = createSlice({
  name: "generalFilter",
  initialState,
  reducers: {
    currentCategoryFilter: (state, action) => {
      state.currentCategory = action.payload;
    },
    selectCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
});

export default generalFilterSlice.reducer;
export const { currentCategoryFilter, selectCurrentId } = generalFilterSlice.actions;
