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
    getCategoryWiseGallery: builder.query({
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

    // get all events
    getEvents: builder.query({
      query: () => "/events",
    }),

    // create event
    addEvents: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
    }),

    getEventsCategories: builder.query({
      query: () => "/eventCategories",
    }),

    // // news
    getaLLNews: builder.query({
      query: () => "/news",
    }),

    getNewsCategories: builder.query({
      query: () => "/alumniNewsCategories",
    }),

    // // extras

    //  all university names
    getAllUniversityName: builder.query({
      query: () => "/all-university-name",
    }),

    // All batches name
    getAllBatches: builder.query({
      query: () => "/all-batches",
    }),
    // All graduation major
    getAllGraduationMajor: builder.query({
      query: () => "/all-graduation-major",
    }),
    // All degree programs
    getAllDegreePrograms: builder.query({
      query: () => "/all-degree-programs",
    }),

    // All batches name
    getAllAlumni: builder.query({
      query: () => "/alumni",
    }),

    // All single charity
    getSingleCharity: builder.query({
      query: (id) => `/charity/${id}`,
    }),

    // /events/category/:id GET endpoint that returns event data based on category ID
    // /events/:id GET endpoint that returns a single event data based on the id parameter
  }),
});

export const {
  //charity
  useGetSingleCharityQuery,
  // NEWS
  useGetNewsCategoriesQuery,

  // UTILS
  useGetAllBatchesQuery,
  useGetAllUniversityNameQuery,
  useGetAllGraduationMajorQuery,
  useGetAllDegreeProgramsQuery,

  // GALLERY
  useGetGalleriesQuery,
  useGetGalleryCategoriesQuery,
  useGetGalleriesFeaturedQuery,
  useGetGalleriesTrendingQuery,

  // EVENTS
  useGetEventsQuery,
  useGetEventsCategoriesQuery,

  // mutations of events
  useAddEventsMutation,

  //  All Alumni
  useGetAllAlumniQuery,
} = apiSlice;
