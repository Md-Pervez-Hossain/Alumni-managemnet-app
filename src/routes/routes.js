import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Main from "../../src/layout/Main";
import Nakib from "../Pages/TestingPage/Nakib";
import Rony from "../Pages/TestingPage/Rony";
import Pervez from "../Pages/TestingPage/Pervez";
import Uhai from "../Pages/TestingPage/Uhai";
import BatchwiseStudent from "../Pages/BatchwiseStudent/BatchwiseStudent";
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import SingleEvent from "../sharedComponents/Events/Category_Wise/SingleEvent";

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
        path: "/events/:singleEventId",
        loader: async ({ params }) => {
          return fetch(
            `https://rowopyusay-server.vercel.app/events/${params.singleEventId}`
          );
        },
        element: <SingleEvent />,
      },
      {
        path: "/alumni-directory",
        loader: () => {
          return fetch("https://course-data-server.vercel.app/courses");
        },
        element: <ErrorPage></ErrorPage>,
      },

      {
        path: "/alumni/:year",
        loader: ({ params }) => {
          return fetch(`https://course-data-server.vercel.app/${params.year}`);
        },
        element: <BatchwiseStudent />,
      },
      {
        path: "/alumniyear",
        loader: ({ params }) => {
          return fetch(`https://course-data-server.vercel.app/${params.year}`);
        },
        element: <BatchwiseStudent />,
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
]);

export default routes;
