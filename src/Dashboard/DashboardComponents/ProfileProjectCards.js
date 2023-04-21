import React from "react";
import { Link } from "react-router-dom";

const ProfileProjectCards = ({ category, title, description, img, link }) => {
  return (
    <div className="w-full max-w-full mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0  rounded-2xl bg-border">
        <div className="relative">
          <Link className="block shadow-xl rounded-2xl">
            <img
              src={
                img
                  ? img
                  : "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
              }
              alt="img-blur-shadow"
              className="max-w-full shadow-soft-2xl rounded-2xl"
            />
          </Link>
        </div>
        <div className="flex-auto px-1 pt-6">
          <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
            {category}
          </p>
          <Link to={link}>
            <h5
              className="font-sans font-
              bold"
            >
              {title}
            </h5>
          </Link>
          <p className="mb-6 leading-normal text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <Link to={link}>
              <button
                type="button"
                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-[#4D32BA] text-[#4D32BA] hover:border-[#4D32BA] hover:bg-transparent hover:text-[#4D32BA] hover:opacity-75 hover:shadow-none active:bg-gradient-to-tl from-primary to-[#1E79DE] active:text-white active:hover:bg-transparent active:hover:text-[#4D32BA]"
              >
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProjectCards;
