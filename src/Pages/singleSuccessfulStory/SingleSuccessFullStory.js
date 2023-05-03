import React from "react";
import MoreSuccessFullStory from "./MoreSuccessFullStory";
import { useLocation } from "react-router-dom";
import { useGetSingleSuccessfulStoriesQuery } from "../../features/Api/apiSlice";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import Comments from "../../sharedComponents/Comments/Comments";
import ShowComments from "../../sharedComponents/Comments/ShowComments";

const SingleSuccessFullStory = () => {
  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/successFullStory/")[1];
  console.log({ currentPath });
  //load data using redux

  const { data, isLoading, isError, error } =
    useGetSingleSuccessfulStoriesQuery(currentPath);
  console.log(data);

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
          <InnerPageHeader img={`${image_url}`} title={`${title}`}></InnerPageHeader>
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

                  <h2 className="text-2xl my-5">{title}</h2>
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
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default SingleSuccessFullStory;
