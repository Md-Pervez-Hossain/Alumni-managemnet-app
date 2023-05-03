import React from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DisplayCharity = ({ charity }) => {
  const {
    batchNumber,
    city,
    state,
    country,
    _id,
    deadline,
    details,
    goal_amount,
    image_url,
    title,
    time,
  } = charity;
  console.log(charity);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      ></div>
      <div className="p-8">
        <Link to={`/charity/${_id}`}>
          <h2 className="mb-3 text-xl">{`${title.slice(0, 20)} ...`}</h2>
        </Link>
        <p className="mb-3">{`${details.slice(0, 50)} ...`}</p>
        <Link to={`/charity/${_id}`} className=" flex gap-1 items-center  ">
          <span className="font-medium"> Read More </span>
        </Link>
      </div>
    </div>
  );
};

export default DisplayCharity;
