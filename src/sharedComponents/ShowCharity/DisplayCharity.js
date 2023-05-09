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
    status,
  } = charity;
  console.log(charity);
  return (
    <div>
      <>
        {" "}
        <div
          style={{
            backgroundImage: `url(${image_url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "300px",
          }}
        ></div>
        <div className="pl-2 pt-3">
          <Link to={`/charity/${_id}`}>
            <h2 className="text-xl mb-3">
              {title.length >= 20 ? (
                <>{`${title.slice(0, 20)} ...`}</>
              ) : (
                <>{`${title}`}</>
              )}
            </h2>
          </Link>
          {details.length >= 70 ? (
            <>{`${details.slice(0, 70)} ...`}</>
          ) : (
            <>{`${details}`}</>
          )}
          <p className="mb-3"></p>
          <Link to={`/charity/${_id}`} className=" flex gap-1 items-center  ">
            <span className="font-medium underline"> Read More </span>
          </Link>
        </div>
      </>
    </div>
  );
};

export default DisplayCharity;
