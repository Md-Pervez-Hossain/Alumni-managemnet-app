import React from "react";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const DisplayAllNews = ({ news }) => {
  return (
    <div className="w-full shadow-lg">
      <div
        className={` h-[269px] m-0 bg-cover bg-center	bg-no-repeat`}
        style={{ backgroundImage: `url(${news.image})` }}
      ></div>
      <div className="px-5 pt-4 py-8 mt-3">
        <h5 className="text-xl mb-4 mt-4 font-medium leading-tight text-gray-900">
          {news?.heading}
        </h5>
        <p>{`${news?.newsDetails.slice(0, 50)} ...`}</p>

        <Link to={`/news/${news._id}`}>
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
                src={news?.img}
                alt=""
              />
            </div>
            <div className="leading-none">
              <p>{news?.author}</p>
              <span>{news?.time}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button>
              <FaRegComment className="inline-block" /> {news?.comments}
            </button>
            <button>
              <MdFavoriteBorder className="inline-block" /> {news?.likes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllNews;
