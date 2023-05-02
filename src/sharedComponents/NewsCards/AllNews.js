import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllNews from "./DisplayAllNews";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";

const AllNews = () => {
  const allNews = useLoaderData();
  console.log(allNews);
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
        <div className="grid lg:grid-cols-3 gap-10">
          {allNews?.map((news) => (
            <DisplayAllNews news={news} key={news._id}></DisplayAllNews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
