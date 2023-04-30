import React, { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../UseContext/AuthProvider";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-primary text-white sticky top-0 z-50 ">
      <div className="w-9/12 mx-auto flex flex-wrap  list-none justify-between items-center py-5 text-xl font-bold">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <>
              {" "}
              <AiOutlineClose className="md:hidden"></AiOutlineClose>{" "}
            </>
          ) : (
            <>
              {" "}
              <BiMenu className="md:hidden"></BiMenu>
            </>
          )}
          <div
            className={`  flex justify-center items-center w-full left-0 px-12 py-3 z-50 bg-primary md:bg-transparent  md:px-0  flex-col absolute md:static duration-700 ease-in-out md:flex-row gap-5 ${
              open ? "top-24" : "top-[-500px]"
            }`}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/alumni">
              <li>Alumni</li>
            </Link>
            <Link to="/alumni/batch/2010">
              <li>2010</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/about-us">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>News</li>
            </Link>
            <Link to="/">
              <li>Gallery</li>
            </Link>

            {user?.uid ? (
              <>
                <div className="dropdown dropdown-end ">
                  <label tabIndex={0} className=" ">
                    <Link>
                      <img
                        src={`${user?.photoURL}`}
                        alt=""
                        className="rounded-full h-10  "
                      />
                    </Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu  bg-primary px-8 py-3 shadow  mt-36 md:mt-0 duration-700 ease-in-out text-white z-50 mr-10 rounded-box "
                  >
                    <Link to="/dashboard">
                      <li className="  hover:text-secondary">Profile</li>
                    </Link>
                    <Link to="/dashboard">
                      <li className="  hover:text-secondary">DashBoard</li>
                    </Link>
                    <Link to="/login">
                      <li
                        className=" hover:text-secondary"
                        onClick={() => handleLogout()}
                      >
                        Log out
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li>Log In</li>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
