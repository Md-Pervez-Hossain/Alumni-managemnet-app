import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  profilePhoto: null,
  email: "",
  phone: "",
  blood: "",
  major: "",
  gradYear: "",
};

const userCreateSlice = createSlice({
  name: "userCreate",
  initialState,
  reducers: {
    addFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    addLastName: (state, action) => {
      state.lastName = action.payload;
    },
    addProfilePhoto: (state, action) => {
      state.profilePhoto = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
    addBlood: (state, action) => {
      state.blood = action.payload;
    },
    addMajor: (state, action) => {
      state.major = action.payload;
    },
    addGraduationYear: (state, action) => {
      state.gradYear = action.payload;
    },
  },
});

export default userCreateSlice.reducer;

export const {
  addFirstName,
  addLastName,
  addEmail,
  addPhone,
  addBlood,
  addMajor,
  addGraduationYear,
  addProfilePhoto,
} = userCreateSlice.actions;
