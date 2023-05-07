import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alumni-managemnet-app-server.vercel.app",
  }),
  tagTypes: ["alumni", "events", "news", "stroy", "gallery", "charity"],
  endpoints: (builder) => ({
    // * Gallery  //
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
      providesTags: ["events"],
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
      invalidatesTags: ["events"],
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
      providesTags: ["alumni"],
    }),

    // yearWise Alumni Data
    getYearWiseAlumni: builder.query({
      query: (id) => `/alumni/batch/${id}`,
    }),

    // single Alumni Data
    getSingleAlumni: builder.query({
      query: (email) => `/alumni/${email}`,
    }),

    // add a new Alumni
    addAlumni: builder.mutation({
      query: (data) => ({
        url: "/alumni",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["alumni"],
    }),

    // Alumni Edit
    editAlumni: builder.mutation({
      query: ({ email, data }) => ({
        url: `/alumni/${email}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["alumni"],
    }),

    // *  successful stories * //

    // All  successful stories Data
    getAllSuccessfulStories: builder.query({
      query: () => "/successFullStory",
    }),
    // All  successful stories Data of a  user, based on email
    getAllSuccessfulStoriesOfAUser: builder.query({
      query: (email) => `/successFullStory/email/${email}`,
    }),

    //  single successful stories
    getSingleSuccessfulStories: builder.query({
      query: (id) => `/successFullStory/${id}`,
    }),
    // *  CHARITY * //

    //  all charity
    getAllCharity: builder.query({
      query: () => `/charity/`,
    }),

    //  single charity

    getSingleCharity: builder.query({
      query: (id) => `/charity/${id}`,
    }),

    // add a new Charity
    addCharity: builder.mutation({
      query: (data) => ({
        url: "/charity/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["charity"],
    }),

    // edit charity
    editCharity: builder.mutation({
      query: ({ id, data }) => ({
        url: `/charity/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["charity"],
    }),

    // * extras

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
  useGetAllSuccessfulStoriesOfAUserQuery,
  useGetSingleSuccessfulStoriesQuery,

  //charity
  useGetAllCharityQuery,
  useGetSingleCharityQuery,
  useAddCharityMutation,
  useEditCharityMutation,

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
  // Mutations of ALUMNI
  useAddAlumniMutation,
  useEditAlumniMutation,
} = apiSlice;
