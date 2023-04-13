import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import CategoryWiseEvent from "../../sharedComponents/Events/Category_Wise_event/CategoryWiseEvent";

const SingleEvent = () => {
  const event = useLoaderData();
  const { description, image_url, event_title, category } = event;
  console.log(event);
  return (
    <>
      <InnerPageHeader
        title={event_title}
        img={image_url}
        description="Learn More About the event"
      />
      <div className="w-full md:w-9/12 mx-auto my-20 md:flex justify-between">
        <div className="w-full md:w-3/5 px-10 mx-auto">
          <div className="rounded-tl-xl rounded-br-xl ">
            <img className="rounded-tl-xl rounded-br-xl" src={image_url} alt="Event" />
          </div>
          {/* content */}
          <div className="flex flex-col justify-between p-2">
            <div className="flex gap-4 items-center">
              <div>
                <span className="text-sm text-center">Days</span>
                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold">
                  {" "}
                  <span>3</span>{" "}
                </div>
              </div>
              <div>
                <span className="text-sm text-center">Hours</span>
                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold">
                  {" "}
                  <span>23</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-center">Min</span>
                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold">
                  {" "}
                  <span>30</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-center">Sec</span>
                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold">
                  {" "}
                  <span>59</span>
                </div>
              </div>
              <span className="mt-6">Remaining</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">{event_title}</h1>
              <span className="inline bg-accent px-4 py-1 text-primary">category</span>
            </div>
            <p className="mt-3">{description}</p>
            {/* <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px]"> */}
            <Link to="/">
              <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px] text-white">
                Join Event
              </button>
            </Link>
            {/* </button> */}
          </div>
        </div>
        <div className="w-full md:w-2/5 px-10 mt-10 md:mt-0">
          <h1 className="text-2xl font-semibold">
            <span className="text-primary">Explore</span> More Events
          </h1>
          <CategoryWiseEvent category={category} />
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
