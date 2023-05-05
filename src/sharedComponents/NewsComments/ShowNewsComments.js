import React, { useEffect, useState } from "react";
import DisplayNewsComments from "./DisplayNewsComments";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ShowNewsComments = ({ data }) => {
  const [newsComments, setNewsComments] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(10);
  useEffect(() => {
    fetch(`http://localhost:8000/newsComments/${data._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data._id]);

  //newsComments, data._id plese solve iuuse , its not provide real time update

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 10);
      setPrevious(previous - 10);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 10);
    setPrevious(previous + 10);
  };

  return (
    <div>
      {newsComments?.length > 0 ? (
        <>
          {" "}
          <h2>Total Comments {newsComments?.length}</h2>
          {newsComments?.slice(previous, next).map((comment) => (
            <DisplayNewsComments
              comment={comment}
              keys={comment._id}
            ></DisplayNewsComments>
          ))}
        </>
      ) : (
        <>
          <span>Still No Comments</span>
        </>
      )}

      <div className="flex mt-5 gap-2 justify-end">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={
            next === newsComments?.length || next > newsComments?.length
          }
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ShowNewsComments;
