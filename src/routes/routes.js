import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Main from "../../src/layout/Main";
import Uhai from "../Pages/TestingPage/Uhai";
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Events from "../Pages/Events/Events";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import SinglePerson from "../Pages/SinglePerson/SinglePerson";
import AlumniPage from "../Pages/AlumniDirectory/AlumniPage";
import BatchWiseStudent from "../Pages/BatchWiseStudent/BatchWiseStudent";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardTestPage from "../Dashboard/DashboardPages/DashboardTestPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/rakib", element: <Rakib /> },
      {
        path: "/uhai",
        element: <Uhai />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:singleEventId",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/events/${params.singleEventId}`
          );
        },
        element: <SingleEvent />,
      },

      {
        path: "/alumni",
        loader: () => {
          return fetch("https://alumni-managemnet-app-server.vercel.app/alumni");
        },
        element: <AlumniPage />,
      },

      {
        path: "/alumni/batch/:year",
        loader: ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/alumni/batch/${params.year}`
          );
        },
        element: <BatchWiseStudent />,
      },
      // single student / alumni page data
      {
        path: "/alumni/:id",
        // path: "/alumni/:graduation_year/:id",
        loader: ({ params }) => {
          console.log(params);
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/alumni/${params.id}`
          );
        },
        element: <SinglePerson />,
      },

      // {
      //   path: "/alumniyear",
      //   loader: ({ params }) => {
      //     return fetch(`https://course-data-server.vercel.app/${params.year}`);
      //   },
      //   element: <BatchwiseStudent />,
      // },

      {
        path: "/about-us",
        element: <AboutUs />,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard/",
    element: <DashboardLayout />,
    children: [{ path: "/dashboard/layout/", element: <DashboardTestPage /> }],
  },
]);

export default routes;
