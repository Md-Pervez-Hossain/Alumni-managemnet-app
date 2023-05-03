import React, { useEffect, useState } from "react";
// import { MdNavigateNext } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaRegComment } from "react-icons/fa";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(3);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 3);
      setPrevious(previous - 3);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 3);
    setPrevious(previous + 3);
  };

  return (
    <div className="mx-auto mt-[5.5rem]">
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold text-center">
        Recent News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
        {newsData?.slice(previous, next).map((data, i) => (
          <NewsCard key={i} data={data}></NewsCard>
        ))}
      </div>

      <div className="flex gap-2 justify-end">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next === newsData?.length || next > newsData?.length}
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
