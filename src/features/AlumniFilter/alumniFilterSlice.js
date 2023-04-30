import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  isEmployed: true,
  bloodGroup: [],
  selectedMajor: [],
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
      // check the index of the action payload.
      const bloodGroupIndex = state.bloodGroup.indexOf(action.payload);

      // if the action payload already exists,
      // then remove it from the array.
      if (bloodGroupIndex !== -1) {
        // in array.splice method we say the index number
        // first and then tell the number of element to remove
        // in this case we tell the index number of already existing element
        // and tell them 1 to remove only that item
        state.bloodGroup.splice(bloodGroupIndex, 1);
      }
      // if the action payload doesn't exists,
      // then add it to the array.
      else {
        state.bloodGroup.push(action.payload);
      }
    },

    MajorWiseFilter: (state, action) => {
      // check the index of the action payload.
      const majorIndex = state.selectedMajor.indexOf(action.payload);

      // if the action payload already exists,
      // then remove it from the array.
      if (majorIndex !== -1) {
        // in array.splice method we say the index number
        // first and then tell the number of element to remove
        // in this case we tell the index number of already existing element
        // and tell them 1 to remove only that item
        state.selectedMajor.splice(majorIndex, 1);
      }
      // if the action payload doesn't exists,
      // then add it to the array.
      else {
        state.selectedMajor.push(action.payload);
      }
    },

    batchWiseFilter: (state, action) => {
      const indexOfYear = state.batchWise.indexOf(action.payload);
      if (indexOfYear !== -1) {
        state.batchWise.splice(indexOfYear, 1);
      } else {
        state.batchWise.push(action.payload);
      }
    },
    cityWiseFilter: (state, action) => {
      state.cityWise.push(action.payload);
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
