import React, { useContext } from "react";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import MoreSuccessFullStory from "./MoreSuccessFullStory";
import { AuthContext } from "../UseContext/AuthProvider";
import Comments from "../Comments/Comments";
import ShowComments from "../Comments/ShowComments";
import { useLoaderData } from "react-router-dom";

const SingleSuccessFullStory = () => {
  const successFullStoryData = useLoaderData();
  console.log(successFullStoryData);
  const {
    batchNumber,
    comments,
    details,
    email,
    image_url,
    img,
    likes,
    name,
    time,
    title,
    _id,
  } = successFullStoryData;
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div>
            <div
              style={{
                backgroundImage: `url(${image_url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "500px",
              }}
            ></div>

            <h2 className="text-4xl my-5">{title}</h2>
            <p className="mb-5">{details}</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "50px",
                  width: "50px",
                }}
              ></div>
              <div>
                <p>{name}</p>
                <p>{time}</p>
              </div>
            </div>
          </div>
          <Comments></Comments>
        </div>

        <div className="lg:col-span-1">
          <MoreSuccessFullStory _id={_id}></MoreSuccessFullStory>
        </div>
      </div>
      <ShowComments></ShowComments>
    </div>
  );
};

export default SingleSuccessFullStory;
