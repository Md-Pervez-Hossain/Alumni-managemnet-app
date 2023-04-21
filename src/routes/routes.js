import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Main from "../../src/layout/Main";
import Uhai from "../Pages/TestingPage/Uhai";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import BatchwiseStudent from "../Pages/BatchwiseStudent/BatchwiseStudent";
>>>>>>> origin/staging-rony
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Events from "../Pages/Events/Events";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
<<<<<<< HEAD
import SinglePerson from "../Pages/SinglePerson/SinglePerson";
import AlumniPage from "../Pages/AlumniDirectory/AlumniPage";
<<<<<<< HEAD
import DashboardTestPage from "../Dashboard/Pages/DashboardTestPage";
import BatchWiseStudent from "../Pages/BatchwiseStudent/BatchwiseStudent";
import MembershipForm from "../Pages/MembershipForm/MembershipForm";
=======
import MembershipForm from "../Pages/MembershipForm/MembershipForm";
=======
import AlumniDirectory from "../Pages/AlumniDirectory/AlumniDirectory";
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import SingleStudent from "../Pages/SingleStudent/SingleStudent";
>>>>>>> 1bb868742c20713fc3392c1953309566059460c2
>>>>>>> origin/staging-rony
=======
import BatchWiseStudent from "../Pages/BatchWiseStudent/BatchWiseStudent";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardTestPage from "../Dashboard/DashboardPages/DashboardTestPage";
import DashboardMain from "../Dashboard/DashboardPages/DashboardMain";
>>>>>>> main

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
        path: "/rony",
<<<<<<< HEAD
        element: <MembershipForm />,
=======
        element: <MembershipForm></MembershipForm>
>>>>>>> origin/staging-rony
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
<<<<<<< HEAD
        element: <AlumniPage />,
=======
        element: <AlumniDirectory />,
>>>>>>> origin/staging-rony
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
<<<<<<< HEAD
=======
        path: "/person",
        element: <SingleStudent />,
      },
      {
>>>>>>> 1bb868742c20713fc3392c1953309566059460c2
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
    children: [
      { path: "/dashboard/", element: <DashboardMain /> },
      { path: "/dashboard/alumni/", element: <DashboardTestPage /> },
      { path: "/dashboard/news/", element: <DashboardTestPage /> },
      { path: "/dashboard/gallery/", element: <DashboardTestPage /> },
      { path: "/dashboard/profile/", element: <DashboardTestPage /> },
    ],
  },
]);

export default routes;
