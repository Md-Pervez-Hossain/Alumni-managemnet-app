import React from "react";
import Counter from "../Counter/Counter";
import { useLoaderData } from "react-router-dom";

const DisplaySingleCharity = () => {
  const charity = useLoaderData();
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
    <div className="w-9/12 mx-auto my-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div
          style={{
            backgroundImage: `url(${image_url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "450px",
          }}
        ></div>
        <div>
          <h2 className="mb-3 text-xl">{title}</h2>
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

          <button className="bg-primary px-6 py-2 text-white mt-3">
            Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplaySingleCharity;
