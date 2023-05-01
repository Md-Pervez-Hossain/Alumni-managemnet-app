import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllNews from "./DisplayAllNews";

const AllNews = () => {
  const allNews = useLoaderData();
  console.log(allNews);
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid lg:grid-cols-3 gap-10">
        {allNews?.map((news) => (
          <DisplayAllNews news={news} key={news._id}></DisplayAllNews>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
