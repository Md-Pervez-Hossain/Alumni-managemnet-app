import React from "react";
import DashBoardNavbar from "../Dashboard/DashboardComponents/DashBoardNavbar";
import { Outlet } from "react-router-dom";
import logo from "../../src/assets/logo/logo-black.png";
import DashBoardNavItem from "../Dashboard/DashboardComponents/DashBoardNavItem";

const DashboardLayout = () => {
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
            <li>
              <DashBoardNavItem />
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
