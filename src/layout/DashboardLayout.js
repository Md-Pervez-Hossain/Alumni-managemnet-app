import React from "react";
import DashBoardNavbar from "../Dashboard/DashboardComponents/DashBoardNavbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../src/assets/logo/logo-black.png";
import DashBoardNavItem from "../Dashboard/DashboardComponents/DashBoardNavItem/DashBoardNavItem";

const DashboardLayout = () => {
  const location = useLocation();
  const isActive = location.pathname === "/dashboard";

  return (
    <>
      <div className="drawer bg-[#F8F9FA] drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content flex flex-col items-start justify-start">
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
              <img src={logo} alt="" className="w-1/2 pt-10" />
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
              name="Gallery"
              fontAwesome="fa-solid fa-photo-film"
              url="/dashboard/gallery"
            />
            <DashBoardNavItem
              name="Profile"
              fontAwesome="fa-solid fa-user"
              url="/dashboard/profile"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
