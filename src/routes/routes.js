import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Uhai from "../Pages/TestingPage/Uhai";
import Main from "../../src/layout/Main";
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Events from "../Pages/Events/Events";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import SinglePerson from "../Pages/SinglePerson/SinglePerson";
import AlumniPage from "../Pages/AlumniDirectory/AlumniPage";
import MembershipForm from "../Pages/MembershipForm/MembershipForm";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardMain from "../Dashboard/DashboardPages/DashboardMain";
import DashboardTestPage from "../Dashboard/DashboardPages/DashboardTestPage";
import AddAEvent from "../Dashboard/DashboardPages/Events/AddAEvent";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import SingleNewsSection from "../sharedComponents/NewsCards/SingleNewsSection";
import BatchWiseStudent from "../Pages/BatchwiseStudent/BatchwiseStudent";
import DisplaySingleCharity from "../sharedComponents/ShowCharity/DisplaySingleCharity";
import AllGalleryImage from "../Pages/Home/Gallery/AllGalleryImage";
import PrivateRoutes from "./PrivateRoutes";
import NewsCreateForm from "../Dashboard/DashboardComponents/NewsCreateForm/NewsCreateForm";
import CreateGallery from "../Dashboard/DashboardPages/CreateGallery/CreateGallery";
import CreateSuccessFullStory from "../Dashboard/DashboardPages/CreateSuccessFullStory/CreateSuccessFullStory";
import SingleSuccessFullStory from "../Pages/singleSuccessfulStory/SingleSuccessFullStory";
import CreateCharity from "../Dashboard/DashboardPages/CreateCharity/CreateCharity";
import AllEvents from "../Dashboard/DashboardPages/Events/AllEvents";
import UpdateStory from "../sharedComponents/UpdateStory/UpdateStory";
import UpdateCharity from "../sharedComponents/UpdateCharity/UpdateCharity";
import UpdateGallery from "../sharedComponents/UpdateGallery/UpdateGallery";
import NewsUpdatePage from "../sharedComponents/NewsUpdatePage/NewsUpdatePage";
import NewsUpdate from "../sharedComponents/NewsUpdate/NewsUpdate";
import AllCharity from "../Dashboard/DashboardPages/CreateCharity/AllCharity";
import AllNews from "../Dashboard/DashboardPages/News/AllNews";
import EventUpdate from "../Dashboard/DashboardPages/EventUpdate/EventUpdate";


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
        element: <MembershipForm />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/successFullStory/:id",
        element: <SingleSuccessFullStory></SingleSuccessFullStory>,
      },
      {
        path: "/updateStory/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/successFullStory/${params.id}`
          );
        },
        element: <UpdateStory></UpdateStory>,
      },
      {
        path: "/updateCharity/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/charity/${params.id}`
          );
        },
        element: <UpdateCharity></UpdateCharity>,
      },
      {
        path: "/updateGallery/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/gallery/${params.id}`
          );
        },
        element: <UpdateGallery></UpdateGallery>,
      },
      {
        path: "/news",
        element: <AllNews></AllNews>,
      },
      {
        path: "/gallery",
        element: <AllGalleryImage></AllGalleryImage>,
      },

      {
        path: "/news/:id",
        element: <SingleNewsSection></SingleNewsSection>,
      },
      {
        path: "/charity/:id",
        element: <DisplaySingleCharity></DisplaySingleCharity>,
      },
      {
        path: "/events/:singleEventId",
        element: <SingleEvent />,
      },

      {
        path: "/alumni",
        element: <AlumniPage />,
      },

      {
        path: "/alumni/batch/:year",
        element: <BatchWiseStudent />,
      },
      // single student / alumni page data
      {
        path: "/alumni/:id",
        element: <SinglePerson />,
      },
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
      {
        path: "/newsUpdatePage",
        element: <NewsUpdatePage></NewsUpdatePage>,
      },
      {
        path: "/newsUpdate/:id",
        element: <NewsUpdate></NewsUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://alumni-managemnet-app-server.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/eventUpdate/:id",
        element: <EventUpdate></EventUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://alumni-managemnet-app-server.vercel.app/events/${params.id}`
          ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard/",
    element: (
      // <PrivateRoutes>

      <DashboardLayout />
      // </PrivateRoutes>
    ),
    children: [
      { path: "/dashboard/", element: <DashboardMain /> },
      { path: "/dashboard/alumni/", element: <DashboardTestPage /> },

      { path: "/dashboard/news/", element: <AllNews /> },
      { path: "/dashboard/news/add-a-news", element: <AddAEvent /> },

      { path: "/dashboard/events", element: <AllEvents /> },
      { path: "/dashboard/events/add-a-event", element: <AddAEvent /> },

      { path: "/dashboard/charity", element: <AllCharity /> },
      { path: "/dashboard/charity/add-a-charity", element: <CreateCharity /> },

      { path: "/dashboard/gallery/", element: <CreateGallery /> },

      {
        path: "/dashboard/successfulStory/",
        element: <CreateSuccessFullStory />,
      },
      {
        path: "/dashboard/successfulStory/add-a-successfulStory",
        element: <CreateSuccessFullStory />,
      },

      { path: "/dashboard/profile/", element: <MembershipForm /> },
      { path: "/dashboard/Checkout/", element: <CheckoutPage /> },
    ],
  },
]);

export default routes;
