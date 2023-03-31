import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-green-500 text-white ">
      <div className="w-9/12 mx-auto flex flex-wrap  list-none justify-between items-center py-5 text-xl font-semibold">
        <div>
          <li>Alumni</li>
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
            className={`flex w-full left-0 px-4 py-3  bg-green-500 text-white md:ml-3  flex-col absolute md:static duration-700 ease-in-out md:flex-row gap-4 ${
              open ? "top-16" : "top-[-200px]"
            }`}
          >
            <li>Home</li>
            <li>Events</li>
            <li>News</li>
            <li>Gallery</li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
