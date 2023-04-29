import React from "react";
import Counter from "../Counter/Counter";

const DisplaySingleCharity = ({ charity }) => {
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
  } = charity;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
        }}
      ></div>
      <div>
        <h2 className="my-3 text-xl">{title}</h2>
        <p className="mb-3">{`${details} `}</p>
        <div className="bg-primary px-3 py-2 w-44 mb-3">
          <p className="text-white"> DeadLine :</p>{" "}
          <Counter date={deadline}></Counter>
        </div>
        <p className="font-semibold">
          Goal Amount : <span className="font-normal">{goal_amount}</span>
        </p>
        <p className="font-semibold">
          Collected Amount : <span className="font-normal">{5000}</span>
        </p>

        <p className="font-semibold">
          Address :{" "}
          <span className="font-normal">{`${city} ${state} ${country}`}</span>
        </p>
      </div>
    </div>
  );
};

export default DisplaySingleCharity;
