import React from "react";
import { Link } from "react-router-dom";

const ProfileBlogCards = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap flex-col-reverse	 md:flex-row -mx-3">
          <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
            <div className="flex flex-col h-full">
              <p className="pt-2 mb-1 font-semibold font-sans text-slate-400">
                Built by developers
              </p>
              <h5 className="font-bold font-sans">Soft UI Dashboard</h5>
              <p className="mb-12">
                From colors, cards, typography to complex elements, you will find the full
                documentation.
              </p>
              <Link
                className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                to="javascript"
              >
                Read More
                <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
              </Link>
            </div>
          </div>
          <div className="max-w-full px-3 mt-0 mb-6 md:mt-12 md:mb-0 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
            <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/shapes/waves-white.svg"
                className="absolute top-0 hidden w-1/2 h-full lg:block"
                alt="waves"
              />
              <div className="relative flex items-center justify-center h-full">
                <img
                  className="relative z-20 w-full pt-6"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
                  alt="rocket"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlogCards;
