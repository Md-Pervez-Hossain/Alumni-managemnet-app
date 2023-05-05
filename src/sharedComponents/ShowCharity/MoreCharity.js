import React from "react";
import { Link } from "react-router-dom";

const MoreCharity = ({ charity }) => {
  console.log(charity);
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
          height: "150px",
        }}
      ></div>
      <div className="pl-2 pt-3 ">
        <h2 className="text-xl">
          {title?.length >= 20 ? (
            <>{`${title?.slice(0, 20)}...`}</>
          ) : (
            <>{`${title}`}</>
          )}
        </h2>
        <p className="mb-2">
          {details?.length >= 70 ? (
            <> {`${details?.slice(0, 70)} ...`}</>
          ) : (
            <>{`${details}`}</>
          )}
        </p>
        <Link to={`/charity/${_id}`}>
          <button className="bg-primary px-6 py-2 text-white ">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MoreCharity;
