import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Counter from "../Counter/Counter";

const UpComingEvents = () => {
  return (
    <>
      <div className="sm:flex shadow-soft-lg drop-shadow-lg	 justify-between items-center sm:w-full max-w-5xl mx-auto bg-primary  gap-4 relative -top-[24px]">
        <div className="absolute bg-white text-gray-900 -top-[24px] right-[0rem]  md:right-[2.5rem] shadow-md px-4">
          <h1 className="text-xl font-semibold">UpComing Events</h1>
        </div>
        {/* images */}
        <div
          loading="lazy"
          className={`h-[24rem] md:h-100 w-full md:w-1/2 bg-accent bg-cover`}
          style={{
            // backgroundImage: `url(${img.image_url})`, // dynamic background image
            backgroundImage: `url(https://i.ibb.co/k50VDVN/events-hall.jpg)`,
          }}
        ></div>

        {/* content */}
        <div className="sm:w-1/2 w-full flex flex-col justify-between py-6 px-4">
          <Counter></Counter>
          <h1 className="text-xl font-semibold text-white py-4">
            We are going to arrange a get together!
          </h1>

          <p className="text-white ">
            We are supporting to your career. You can join our event to develop your skill
            and share your experience. Joining this event you can gain knowledge from
            other and you can share your skills for the next generation. We respect your
            time. To explore the event Join Now.
          </p>
          <button className=" bg-white hover:bg-secondary p-2 mt-4 mb-8 w-[150px]">
            <span className="text-black font-bold">
              Join Now <MdNavigateNext className="inline-block text-black" />
            </span>
          </button>
          <div className="bg-secondary text-black w-[100px] py-2 flex justify-evenly items-center absolute right-2 bottom-2">
            <button className="text-right">
              <MdNavigateNext className="rotate-180" size={23} />{" "}
            </button>
            <button className="text-right">
              <MdNavigateNext className="" size={23} />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingEvents;
