import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllNews from "./DisplayAllNews";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { useGetaLLNewsQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";

const AllNews = () => {
  const {
    data: newsData,
    isError: newsIsError,
    isLoading: newsIsLoading,
    error: newsError,
  } = useGetaLLNewsQuery();

  let newsContent;

  if (newsIsLoading && !newsIsError) {
    newsContent = <Loading />;
  }
  if (!newsIsLoading && newsIsError) {
    newsContent = <ErrorAlert text={newsError} />;
  }
  if (!newsIsLoading && !newsIsError && newsData?.length === 0) {
    newsContent = <ErrorAlert text="No News Find" />;
  }
  if (!newsIsLoading && !newsIsError && newsData?.length > 0) {
    newsContent = (
      <>
        {" "}
        <div className="grid lg:grid-cols-3 gap-10">
          {newsData?.map((news) => (
            <DisplayAllNews news={news} key={news._id}></DisplayAllNews>
          ))}
        </div>{" "}
      </>
    );
  }

  return (
    <div className="">
      <InnerPageHeader
        title={"All News"}
        img={
          "https://images.pexels.com/photos/7942549/pexels-photo-7942549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        description="welcome To News Page"
      ></InnerPageHeader>
      <div className="w-9/12 mx-auto my-16">
        <>{newsContent}</>
      </div>
    </div>
  );
};

export default AllNews;
