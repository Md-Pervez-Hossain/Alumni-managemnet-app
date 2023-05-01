import React from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

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
    <div className="grid lg:grid-cols-2  gap-5 items-center">
      <div
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      ></div>
      <div>
        <h2 className="my-3 text-xl">{title}</h2>
        <p className="mb-3">{`${details.slice(0, 50)} ...`}</p>
        <div className="bg-primary px-3 py-2  mb-3">
          <p className="text-white"> DeadLine :</p>{" "}
          <Counter date={deadline}></Counter>
          <p className="mt-2">
            <Link
              to={`/charity/${_id}`}
              className=" font-semibold text-secondary"
            >
              {" "}
              Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCharity;
