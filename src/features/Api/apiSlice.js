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

    // BatchWise Gallery data
    getBatchWiseGallery: builder.query({
      query: (id) => `/galleries/batch/${id}`,
    }),

    // // EVENTS  //

    // get all events
    getEvents: builder.query({
      query: () => "/events",
    }),

    //  single event
    getBatchWiseEvents: builder.query({
      query: (id) => `/events/batch/${id}`,
    }),

    // create event
    addEvents: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
    }),

    //  single event
    getSingleEvent: builder.query({
      query: (id) => `/events/${id}`,
    }),

    // events categories
    getEventsCategories: builder.query({
      query: () => "/eventCategories",
    }),

    // // news
    getaLLNews: builder.query({
      query: () => "/news",
    }),

    getSingleNews: builder.query({
      query: (id) => `/news/${id}`,
    }),

    getNewsCategories: builder.query({
      query: () => "/alumniNewsCategories",
    }),

    // * Alumni * //

    // All Alumni Data
    getAllAlumni: builder.query({
      query: () => "/alumni",
    }),

    // yearWise Alumni Data
    getYearWiseAlumni: builder.query({
      query: (id) => `/alumni/batch/${id}`,
    }),

    // single Alumni Data
    getSingleAlumni: builder.query({
      query: (id) => `/alumni/${id}`,
    }),

    // *  successful stories * //

    // All  successful stories Data
    getAllSuccessfulStories: builder.query({
      query: () => "/successFullStory",
    }),

    //  single successful stories
    getSingleSuccessfulStories: builder.query({
      query: (id) => `/successFullStory/${id}`,
    }),
    // *  CHARITY * //

    //  single charity
    getAllCharity: builder.query({
      query: () => `/charity/`,
    }),

    //  single charity

    getSingleCharity: builder.query({
      query: (id) => `/charity/${id}`,
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

    // /events/category/:id GET endpoint that returns event data based on category ID
    // /events/:id GET endpoint that returns a single event data based on the id parameter
  }),
});

export const {
  //   successful stories
  useGetAllSuccessfulStoriesQuery,
  useGetSingleSuccessfulStoriesQuery,

  //charity
  useGetAllCharityQuery,
  useGetSingleCharityQuery,
  // NEWS
  useGetaLLNewsQuery,
  useGetSingleNewsQuery,
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
  useGetBatchWiseGalleryQuery,

  // EVENTS
  useGetEventsQuery,
  useGetBatchWiseEventsQuery,
  useGetEventsCategoriesQuery, //event category
  useGetSingleEventQuery,

  // mutations of events
  useAddEventsMutation,

  //  All Alumni
  useGetAllAlumniQuery,
  useGetYearWiseAlumniQuery,
  useGetSingleAlumniQuery,
} = apiSlice;
