import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imgBbApiSlice = createApi({
  reducerPath: "imgBbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.imgbb.com/1",
  }),
  tagTypes: ["profileImageUpload"],

  endpoints: (builder) => ({
    addAImage: builder.mutation({
      query: (data) => ({
        url: "/upload?key=dd1a5cd35aa9d832298beb50053079da",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["profileImageUpload"],
    }),
  }),
});

export const { useAddAImageMutation } = imgBbApiSlice;
