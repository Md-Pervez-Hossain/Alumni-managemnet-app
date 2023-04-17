import React from "react";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import MoreNews from "./MoreNews";

const SingleNewsSection = () => {
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div>
            <img
              src="https://images.pexels.com/photos/7972719/pexels-photo-7972719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h2 className="text-4xl my-5">Single Page Heading</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consequuntur aut autem quisquam, tempore voluptatum fugiat, est
              vel commodi, voluptate tempora modi blanditiis qui quam ducimus
              iste itaque magnam. Reprehenderit?
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <p>Pervez</p>
                <p>18/4/2023</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <FaRegComment className="inline-block" />
                <span>Comments</span>
              </div>
              <div className="flex items-center gap-2">
                <MdFavoriteBorder className="inline-block" />
                <span>Likes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <MoreNews></MoreNews>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsSection;
