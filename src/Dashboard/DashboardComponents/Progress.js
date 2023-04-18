import React from "react";

const Progress = () => {
  return (
    <div className="w-full">
      <div className="flex mb-2">
        <span className="mr-2 font-semibold leading-normal capitalize text-sm">
          default progress
        </span>
        <span className="ml-auto font-semibold leading-normal text-sm">50%</span>
      </div>
      <div>
        <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
          <div className="bg-fuchsia-500 w-1/2 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
