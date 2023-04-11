import React from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const NewsCard = ({ data }) => {
  return (
    <div className="w-full shadow-lg">
      <div
        className={` h-[269px] m-0 bg-cover bg-center	bg-no-repeat`}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      {/*  */}
      <div className="px-5 pt-4 py-8 mt-3">
        <h5 className="text-xl mb-4 mt-4 font-medium leading-tight text-gray-900">
          {data?.title}
        </h5>
        <p className=" text-sm text-gray-900">{data?.description}....</p>

        <button className="mt-4 text-right text-primary font-bold ">Learn More </button>

        {/* news author */}
        <div className="mt-5  flex justify-between items-center text-black ">
          <div className="flex gap-2">
            <div className="w-11 h-11 rounded-full border-2">
              <img
                className="w-full h-full object-cover rounded-full"
                src={data?.author.profileImage}
                alt=""
              />
            </div>
            <div className="leading-none">
              <p>{data?.author.name}</p>
              <span>{data?.author.postedTime}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button>
              <FaRegComment className="inline-block" /> {data?.author.comments}
            </button>
            <button>
              <MdFavoriteBorder className="inline-block" /> {data?.author.favorite}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
