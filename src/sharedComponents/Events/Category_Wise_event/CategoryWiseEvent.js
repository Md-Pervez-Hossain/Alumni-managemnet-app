import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import AllEventsCard from "../AllEvents/AllEventsCard";

const CategoryWiseEvent = ({ category }) => {
  const [categories, setCategories] = useState([]);
  const [next, setNext] = useState(3);
  const [previous, setPrevious] = useState(0);

  const previousHandler = () => {
    if (previous > 0) {
      setNext(next - 3);
      setPrevious(previous - 3);
    }
  };
  const nextHandler = () => {
    setNext(next + 3);
    setPrevious(previous + 3);
  };
  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/events/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [category]);
  let content;
  if (!categories) {
    content = (
      <div>
        <h1 className="text-xl text-primary">Loading...</h1>
      </div>
    );
  } else {
    content = categories
      ?.slice(previous, next)
      .map((item) => <AllEventsCard key={item._id} item={item} />);
  }
  return (
    <div>
      {content}
      {/* Pagination button */}
      <div className="right-0 text-white mb-5 text-right mt-5 flex gap-4 justify-end items-center mr-3">
        <button
          onClick={() => previousHandler()}
          disabled={previous <= 0}
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
          onClick={() => nextHandler()}
          disabled={next > categories.length}
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
  );
};

export default CategoryWiseEvent;
