import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/Api/apiSlice";
import alumniFilterReducer from "../features/AlumniFilter/alumniFilterSlice";
import generalFilterReducer from "../features/generalFilters/generalFilters";
import userCreateReducer from "../features/userCreate/userCreate";
import { imgBbApiSlice } from "../features/Api/imgbbSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alumniFilter: alumniFilterReducer,
    generalFilter: generalFilterReducer,
    userCreate: userCreateReducer,
    [imgBbApiSlice.reducerPath]: imgBbApiSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware).concat(imgBbApiSlice.middleware),
  // });
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, imgBbApiSlice.middleware),
});
