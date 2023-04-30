import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/Api/apiSlice";
import alumniFilterReducer from "../features/AlumniFilter/alumniFilterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // filterReducer: apiSlice.filterReducer
    alumniFilter: alumniFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
