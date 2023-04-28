import React, { useEffect, useRef } from "react";
import DashBoardNavbar from "../Dashboard/DashboardComponents/DashBoardNavbar";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../src/assets/logo/logo-black.png";
import DashBoardNavItem from "../Dashboard/DashboardComponents/DashBoardNavItem/DashBoardNavItem";
import ResizeObserver from "resize-observer-polyfill";
import _ from "lodash";
const DashboardLayout = () => {
  const location = useLocation();
  const isActive = location.pathname === "/dashboard";

  const elementRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      _.debounce((entries) => {
        console.log("Element size changed!");
        // handle resize events here
      }, 100)
    );
    resizeObserver.observe(elementRef.current);

    // cleanup function to disconnect the observer when the component unmounts
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <div ref={elementRef} className="drawer bg-[#F8F9FA] drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex flex-col items-start justify-start">
          {/* <!-- Page content here --> */}
          <DashBoardNavbar />
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#F8F9FA]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/" className="bg-transparent px-4  mb-5">
                <img src={logo} alt="" className="mt-0.5 w-3/4 " />
              </Link>
            </li>
            <DashBoardNavItem
              name="Dashboard"
              fontAwesome="fa-solid fa-store"
              url="/dashboard"
            />
            <DashBoardNavItem
              name="Alumni"
              fontAwesome="fa-solid fa-graduation-cap"
              url="/dashboard/alumni"
            />
            <DashBoardNavItem
              name="News"
              fontAwesome="fa-regular fa-file-lines"
              url="/dashboard/news"
            />
            <DashBoardNavItem
              name="Events"
              fontAwesome="fa-regular fa-file-lines"
              url="/dashboard/events"
            />
            <DashBoardNavItem
              name="Gallery"
              fontAwesome="fa-solid fa-photo-film"
              url="/dashboard/gallery"
            />
            <DashBoardNavItem
              name="Profile"
              fontAwesome="fa-solid fa-user"
              url="/dashboard/profile"
            />
            <DashBoardNavItem
              name="Logout "
              bg="bg-gradient-to-tl from-primary to-[#1E79DE] "
              text="text-white"
              fontAwesome="fa-solid fa-right-from-bracket"
              url="/"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
