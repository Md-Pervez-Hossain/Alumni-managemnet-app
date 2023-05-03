import React from "react";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import MoreNews from "./MoreNews";
import { useLocation } from "react-router-dom";
import Comments from "../Comments/Comments";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { useGetSingleNewsQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";

const SingleNewsSection = () => {
  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/news/")[1];
  console.log({ currentPath });
  //load data using redux

  const { data, isLoading, isError, error } = useGetSingleNewsQuery(currentPath);
  console.log(data);

  const {
    NewsCategory,
    author,
    authorProfession,
    comments,
    email,
    heading,
    image,
    img,
    likes,
    newsDetails,
    time,
    _id,
  } = data || {};

  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        {" "}
        <div>
          <InnerPageHeader img={`${image}`} title={`${heading}`}></InnerPageHeader>
          <div className="w-9/12 mx-auto my-16">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "500px",
                    }}
                  ></div>

                  <h2 className="text-2xl my-5">{heading}</h2>
                  <p className="mb-5">{newsDetails}</p>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full"
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
                      <p>{author}</p>
                      <p>{time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <FaRegComment className="inline-block cursor-pointer" />
                      <span>{comments}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdFavoriteBorder className="inline-block cursor-pointer" />
                      <span>{likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <MoreNews _id={_id}></MoreNews>
              </div>
              <Comments></Comments>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default SingleNewsSection;
