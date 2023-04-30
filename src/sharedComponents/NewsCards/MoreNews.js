import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreNews = ({ _id }) => {
  const [stories, setStories] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  useEffect(() => {
    fetch("http://localhost:8000/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(stories);
  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 6);
      setPrevious(previous - 6);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 6);
    setPrevious(previous + 6);
  };
  return (
    <div>
      {stories
        ?.slice(previous, next)
        .filter((story) => story._id !== _id)
        .map((story) => {
          return (
            <>
              <div
                key={story._id}
                className="flex items-center gap-3 justify-between mb-5"
              >
                <div
                  style={{
                    backgroundImage: `url(${story.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "150px",
                    width: "250px",
                  }}
                ></div>
                <div>
                  <h2 className="mb-2">SuccessFull Story Heading</h2>
                  <p className="text-[12px] mb-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos, in.
                  </p>
                  <Link to={`/news/${story._id}`}>
                    {" "}
                    <button className="bg-secondary px-4 py-2 text-white">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}

      <div className="flex gap-2 justify-end">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button disabled={next > stories?.length} onClick={() => handleNext()}>
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default MoreNews;
