import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import SuccessStoriesCard from "./SucessStoriesCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SuccessStoriesSection = () => {
  const [successStory, setSuccessStory] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(3);

  useEffect(() => {
    fetch("http://localhost:8000/successFullStory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccessStory(data);
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
    <div className="my-3  mx-auto relative">
      <h1 className="my-7 text-3xl font-semibold text-center">
        Successful Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-between mb-4">
        {successStory?.slice(previous, next).map((data) => (
          <SuccessStoriesCard key={data._id} data={data}></SuccessStoriesCard>
        ))}
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next > successStory?.length}
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
