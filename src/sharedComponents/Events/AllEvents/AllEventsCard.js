import React from "react";
import { Link } from "react-router-dom";

const AllEventsCard = ({ item }) => {
  return (
    <div
      key={item._id}
      className="my-10 md:flex gap-5  justify-between items-center w-full"
    >
      {/* image */}

      <div
        loading="lazy"
        className={`group h-60  w-full md:w-1/2 bg-primary bg-cover`}
        style={{
          backgroundImage: `url(${item.image_url})`,
        }}
      >
        <div className="invisible group-hover:visible ease-in-out duration-500	 text-white w-full h-full  flex pb-2 justify-center items-end bg-gradient-to-t from-black to-transparent from-10% to-50% px-5">
          {/* Time left part */}
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 text-primary bg-accent text-center rounded-full flex justify-center items-center text-sm font-semibold">
                {" "}
                <span>3</span>{" "}
              </div>
              <span className="text-sm text-center">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 text-primary bg-accent text-center rounded-full flex justify-center items-center text-sm font-semibold">
                {" "}
                <span>23</span>
              </div>
              <span className="text-sm text-center">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 text-primary bg-accent text-center rounded-full flex justify-center items-center text-sm font-semibold">
                {" "}
                <span>30</span>
              </div>
              <span className="text-sm text-center">Min </span>
            </div>
            <span className="text-sm text-center">Remaining </span>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="md:w-1/2 w-full  flex flex-col justify-between p-2">
        <>
          <h1 className="text-xl font-semibold">{item.event_title}</h1>
        </>
        <p className="mt-3">{item.description}</p>
        {/*  */}

        {/*  */}
        <Link to={`/events/${item._id}`} className="text-white font-bold">
          <button className="mt-4 py-2 px-6 text-right text-primary font-bold bg-secondary">
            {" "}
            Learn More{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllEventsCard;
