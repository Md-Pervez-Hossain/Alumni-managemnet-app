import React from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full shadow-lg">
      <div
        className={` h-[269px] m-0 bg-cover bg-center	bg-no-repeat`}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="px-5 pt-4 py-8 mt-3">
        <h5 className="text-xl mb-4 mt-4 font-medium leading-tight text-gray-900">
          {data?.heading}
        </h5>
        <p>{`${data?.newsDetails.slice(0, 50)} ...`}</p>

        <Link to={`/news/${data._id}`}>
          <button className="mt-4 text-right text-primary font-bold ">
            Learn More{" "}
          </button>
        </Link>

        {/* news author */}
        <div className="mt-5  flex justify-between items-center text-black ">
          <div className="flex gap-2">
            <div className="w-11 h-11 rounded-full border-2">
              <img
                className="w-full h-full object-cover rounded-full"
                src={data?.img}
                alt=""
              />
            </div>
            <div className="leading-none">
              <p>{data?.author}</p>
              <span>{data?.time}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button>
              <FaRegComment className="inline-block" /> {data?.comments}
            </button>
            <button>
              <MdFavoriteBorder className="inline-block" /> {data?.likes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
