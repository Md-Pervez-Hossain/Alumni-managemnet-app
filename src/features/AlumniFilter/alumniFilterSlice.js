import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  isEmployed: true,
  bloodGroup: [],
  majorWise: [],
  cityWise: [],
  batchWise: [],
};

const alumniFilterSlice = createSlice({
  name: "AlumniFilter",
  initialState,
  reducers: {
    sortFilter: (state, action) => {
      state.sort = action.payload;
    },

    isEmployedFilter: (state, action) => {
      state.isEmployed.push(action.payload);
    },
    bloodGroupFilter: (state, action) => {
      state.bloodGroup.push(action.payload);
    },
    MajorWiseFilter: (state, action) => {
      state.majorWise.push(action.payload);
    },
    cityWiseFilter: (state, action) => {
      state.cityWise.push(action.payload);
    },
    batchWiseFilter: (state, action) => {
      state.batchWise.push(action.payload);
    },
  },
});

export default alumniFilterSlice.reducer;
export const {
  sortFilter,
  isEmployedFilter,
  bloodGroupFilter,
  MajorWiseFilter,
  cityWiseFilter,
  batchWiseFilter,
} = alumniFilterSlice.actions;
