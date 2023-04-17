import React from "react";

const MoreNews = () => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <div>
        <img
          src="https://images.pexels.com/photos/7944058/pexels-photo-7944058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-36 w-80"
        />
      </div>
      <div>
        <h2>News Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
          in.
        </p>
        <button className="bg-secondary px-6 py-2 text-white">Details</button>
      </div>
    </div>
  );
};

export default MoreNews;
