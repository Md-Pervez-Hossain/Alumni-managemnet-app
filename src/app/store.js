import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/Api/apiSlice";
import alumniFilterReducer from "../features/AlumniFilter/alumniFilterSlice";
import generalFilterReducer from "../features/generalFilters/generalFilters";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alumniFilter: alumniFilterReducer,
    generalFilter: generalFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
