import React from "react";
import { MdNavigateNext } from "react-icons/md";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const newsData = [
    {
      _id: 1,
      title: "Recently we create a massive project",
      description:
        "This the description of today news. You can find here our latest news.",
      image:
        "https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-10-3-750x405.jpg",
      author: {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`,
      },
    },
    {
      _id: 2,
      title: "Alumni Meet & Greet in Hong Kong",
      description:
        "This the description of today news. You can find here our latest news.",
      image:
        "https://sayidan.kenzap.com/wp-content/uploads/2016/07/single-event-img-3-569x331.jpg",
      author: {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`,
      },
    },
    {
      _id: 3,
      title: "TBA President's Dinner 2023",
      description:
        "This the description of today news. You can find here our latest news.",
      image:
        "https://img2.storyblok.com/f/103430/568x367/61d04575df/womens-history.PNG",
      author: {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`,
      },
    },
  ];
  return (
    <div className="mx-auto mt-[5.5rem]">
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold text-center">
        Recent News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
        {newsData.map((data, i) => (
          <NewsCard key={i} data={data}></NewsCard>
        ))}
      </div>

      <div className="right-0 text-white mb-5 text-right mt-5">
        <button className=" py-4 px-8 text-right text-white font-bold bg-primary">
          <span>
            More News
            <MdNavigateNext className="inline-block text-white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
