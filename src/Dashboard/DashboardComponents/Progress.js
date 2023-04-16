import React from "react";

const Progress = () => {
  return (
    <div class="w-full">
      <div class="flex mb-2">
        <span class="mr-2 font-semibold leading-normal capitalize text-sm">
          default progress
        </span>
        <span class="ml-auto font-semibold leading-normal text-sm">50%</span>
      </div>
      <div>
        <div class="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
          <div class="bg-fuchsia-500 w-1/2 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
