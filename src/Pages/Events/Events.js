import React, { useEffect, useState } from "react";
import student from "../../assets/batchwiseStudent.jpg";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
// import AllEvents from "../../sharedComponents/Events/AllEvents/AllEvents";
import { MdNavigateNext } from "react-icons/md";
import AllEventsCard from "../../sharedComponents/Events/AllEvents/AllEventsCard";

const Events = () => {
  const [category, setCategory] = useState("All Events");
  const [eventCategory, setEventCategory] = useState([{ eventCategory: "All" }]);
  const [events, setEvents] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(4);

  const nextHandler = () => {
    // if(next<=eventItems.length)
    setNext(next + 4);
    setPrevious(previous + 4);
  };
  const previousHandler = () => {
    if (previous > 0) {
      setNext(next - 4);
      setPrevious(previous - 4);
    }
  };

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/eventCategories")
      .then((res) => res.json())
      .then((data) => {
        setEventCategory(data);
      });
  }, []);

  function handleEventLoad(currentEvent) {
    setCategory(currentEvent);
  }

  const eventItems =
    category === "All Events" ? events : events.filter((item) => item.event === category);

  return (
    <>
      <InnerPageHeader
        title="Event"
        img={student}
        description="Find all the events in one place"
      />
      <div className="w-9/12 mx-auto my-20 sm:flex gap-3">
        {/* for mobile */}
        <div className="md:w-1/4 w-full border-1 bg-accent sm:hidden block mt-10 p-3">
          <select
            onChange={(e) => handleEventLoad(e.target.value)}
            className="w-full h-11 border-green-500"
          >
            {eventCategory.map((item) => (
              <option
                key={item._id}
                className="text-xl font-semibold"
                value={item.eventCategory}
              >
                {item.eventCategory}
              </option>
            ))}
          </select>
        </div>
        <div className=" md:w-3/4 w-full">
          <div>
            <h2 className="text-2xl text-primary">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {eventItems.slice(previous, next).map((item) => (
                <AllEventsCard key={item._id} item={item} />
              ))}
            </div>
            {/* Pagination button */}
            <div className="right-0 text-white mb-5 text-right mt-5 flex gap-4 justify-end items-center mr-3">
              <button
                disabled={previous <= 0}
                onClick={() => previousHandler()}
                className="text-right bg-primary"
              >
                <span>
                  <MdNavigateNext
                    className="inline-block rotate-180 font-semibold text-xl"
                    color="white"
                  />
                </span>
              </button>
              <button
                disabled={next > eventItems.length}
                onClick={() => nextHandler()}
                className="text-right bg-primary"
              >
                <span>
                  <MdNavigateNext
                    className="inline-block font-semibold text-xl"
                    color="white"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* for web */}
        <div className="border-l-2 border-accent  hidden sm:block pl-5">
          <div className="flex sm:flex-col flex-row justify-center items-start mx-auto">
            <h5 className="px-5 py-2 text-lg font-semibold text-primary">
              Browse Events
            </h5>
            {eventCategory?.map((item) => (
              <button
                key={item._id}
                onClick={() => handleEventLoad(item.eventCategory)}
                className="px-5 py-2 text-left text-sm font-semibold  hover:text-primary text-gray-900"
              >
                {item.eventCategory}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
