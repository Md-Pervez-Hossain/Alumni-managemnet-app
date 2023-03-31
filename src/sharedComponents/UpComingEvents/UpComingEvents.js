import React from "react";
import { MdNavigateNext } from "react-icons/md";

const UpComingEvents = () => {
  return (
    <>
      <div className="sm:flex justify-between items-center sm:w-full max-w-5xl mx-auto px-5 py-7 bg-[#2D6B5A] mt-3 gap-6">
        {/* images */}
        <div className="sm:w-1/2 w-full rounded-tl-3xl rounded-br-3xl">
          <img className="rounded-tl-3xl rounded-br-3xl w-full h-full" src="https://i.ibb.co/k50VDVN/events-hall.jpg" alt="events-hall" />
        </div>
        {/* content */}
        <div className="sm:w-1/2 w-full">
          <h1 className="text-white text-3xl font-semibold">UpComing Events</h1>
          <div className="flex gap-4">
            <div>
              <span className="text-white text-sm text-center">Days</span>
              <div className="w-8 h-8 bg-white text-center rounded-full">2</div>
            </div>
            <div>
              <span className="text-white text-sm text-center">Hours</span>
              <div className="w-8 h-8 bg-white text-center rounded-full">21</div>
            </div>
            <div>
              <span className="text-white text-sm text-center">Min</span>
              <div className="w-8 h-8 bg-white text-center rounded-full">22</div>
            </div>
            <span className="text-white mt-6">Remaining</span>
          </div>
          <p className="text-white mt-3">
            We are supporting to your career. You can join our event to develop your skill
            and share your experience. Joining this event you can gain knowledge from
            other and you can share your skills for the next generation. We respect your
            time. To explore the event Join Now.
          </p>

          <button className="btn bg-white p-2 mt-4 rounded-tl-lg rounded-br-lg">
            <span className="text-[#2D6B5A] font-bold">
              Join Now <MdNavigateNext className="inline-block text-[#2D6B5A]" />
            </span>
          </button>
        </div>
      </div>
      <p className="text-white mt-3">
        We are supporting to your career. You can join our event to develop your skill and
        share your experience. Joining this event you can gain knowledge from other and
        you can share your skills for the next generation. We respect your time. To
        explore the event Join Now.
      </p>
    </>
  );
};

export default UpComingEvents;
