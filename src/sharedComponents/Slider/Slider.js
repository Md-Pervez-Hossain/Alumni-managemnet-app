import React from "react";
import banner from "../../assets/herobanner.jpg";

const Slider = () => {
  return (
    <div className="md:w-9/12 mx-auto  ">
      <div className="relative">
        <img src={banner} alt="Hero Banner" />
        <div className="absolute w-full md:w-1/2 px-2 mb-2  text-center     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="md:text-7xl text-2xl font-semibold  text-white md:mb-2">
            We Are Proud
          </h2>
          <h4 className="text-white md:text-2xl md:mb-2">
            {" "}
            To Be Student Of Oxfort University{" "}
          </h4>
          <p className="text-white md:mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quia,
            mollitia voluptate debitis quidem rerum esse at sint possimus
            impedit.
          </p>
          <button className="bg-[#2D6B5A] rounded-tl-lg rounded-br-lg px-4 py-2 mt-2  text-white">
            Login For Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
