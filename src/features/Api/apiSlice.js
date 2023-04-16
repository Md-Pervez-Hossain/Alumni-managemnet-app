import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alumni-managemnet-app-server.vercel.app",
  }),
  endpoints: (builder) => ({
    // // Gallery  //
    getGalleries: builder.query({
      query: () => "/galleries ",
    }),
    getCategoryWiseGallery20: builder.query({
      query: (id) => `/galleryCategories/${id}`,
    }),
    // /galleryCategories/:id GET endpoint that returns a single gallery category data based on the id parameter
    // /galleries/batch/:batchNumber GET endpoint that returns gallery data based on batch number
    // /galleries/:id GET endpoint that returns gallery data based on category ID
    getGalleryCategories: builder.query({
      query: () => "/galleryCategories",
    }),
    getGalleriesFeatured: builder.query({
      query: () => "/galleries/featured",
    }),
    getGalleriesTrending: builder.query({
      query: () => "/galleries/trending ",
    }),
    // // EVENTS  //
    getEvents: builder.query({
      query: () => "/events",
    }),
    getEventCategories: builder.query({
      query: () => "/eventCategories",
    }),
    // /events/category/:id GET endpoint that returns event data based on category ID
    // /events/:id GET endpoint that returns a single event data based on the id parameter
  }),
});

export const {
  useGetGalleriesQuery,

  useGetGalleryCategoriesQuery,
  useGetGalleriesFeaturedQuery,
  useGetGalleriesTrendingQuery,
  useGetEventsQuery,
  useGetEventCategoriesQuery,
} = apiSlice;
