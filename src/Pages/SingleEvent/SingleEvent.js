import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import CategoryWiseEvent from "../../sharedComponents/Events/Category_Wise_event/CategoryWiseEvent";
import Counter from "../../sharedComponents/Counter/Counter";

const SingleEvent = () => {
  const event = useLoaderData();
  const { description, image_url, event_title, category, batch, date } = event;
  console.log(event);
  console.log(date);
  return (
    <>
      <InnerPageHeader
        title={event_title}
        img={image_url}
        description="Learn More About the event"
      />
      <div className="w-full md:w-9/12 mx-auto my-20 md:flex justify-between">
        <div className="w-full md:w-3/5 px-10 mx-auto">
          <div className="">
            <img className="" src={image_url} alt="Event" />
          </div>
          {/* content */}
          <div className="flex flex-col justify-between p-2">
            <Counter date={date}></Counter>

            <div>
              <h1 className="text-xl font-semibold">{event_title}</h1>
              <h1 className="text-xl font-semibold">
                {new Date(date).toLocaleDateString("en-US")}
              </h1>
              <span className="inline bg-accent px-4 py-1 my-2 text-primary font-semibold shadow-soft-lg ">
                {batch}
              </span>
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
