import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthProvider from "./sharedComponents/UseContext/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        {/* <ToastContainer position="top-center" /> */}
        <Toaster />
        <RouterProvider router={routes}>
          <App />
          
        </RouterProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
