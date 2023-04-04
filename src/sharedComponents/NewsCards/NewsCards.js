import React from "react";
import { MdNavigateNext } from "react-icons/md";

const NewsCard = () => {
  const newsData = [
    {
      _id: 1,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
    },
    {
      _id: 2,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
    },
    {
      _id: 3,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
    },
    {
      _id: 4,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
    },
  ];
  return (
    // <div className="mt-3 max-w-5xl mx-auto relative">
    //   <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold">News</h1>
    //   <div className="flex gap-3 items-center mb-4">
    //     {newsData.map((data) => (
    //       <div
    //         key={data._id}
    //         className="w-full bg-[#2D6B5A] rounded-tl-3xl rounded-br-3xl"
    //       >
    //         <img className="rounded-tl-3xl rounded-br-3xl" src={data.image} alt="demo" />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="right-0 text-white mb-5 text-right">
    //     <button className="text-right bg-[#2D6B5A] p-2 rounded-tl-lg rounded-br-lg">
    //       <span>
    //         More Stories <MdNavigateNext className="inline-block" color="white" />
    //       </span>
    //     </button>
    //   </div>
    // </div>

    <div className="max-w-5xl mx-auto mt-[5.5rem]">
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold">News</h1>
      <div className="flex justify-between gap-3">

        {
          newsData.map((data) => (
            <div
              className="w-full bg-[#2D6B5A] rounded-tl-3xl rounded-br-3xl shadow-lg dark:bg-neutral-700">
              <a href="/" data-te-ripple-init data-te-ripple-color="light">
                <img
                  className="rounded-tl-3xl rounded-br-3xl"
                  src={data?.image}
                  alt={data.image} />
              </a>
              <div className="p-2">
                <h5
                  className="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {data?.title}
                </h5>
                
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {data?.description}....
                </p>
                <button
                  type="button"
                  className="text-white font-semibold border rounded-md p-2 hover:bg-white hover:text-neutral-700">
                  Read More
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="right-0 text-white mb-5 text-right mt-5">
        <button className="text-right bg-[#2D6B5A] p-2 rounded-tl-lg rounded-br-lg">
          <span>
            More Stories <MdNavigateNext className="inline-block" color="white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
