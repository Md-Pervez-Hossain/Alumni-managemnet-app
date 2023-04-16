import React from "react";

const ButtonSizeSkeletion = () => {
  return (
    <div role="status" class="max-w-sm animate-pulse flex gap-5">
      <div class=" bg-gray-200 rounded-none dark:bg-gray-700 px-12 py-5 mb-4"></div>
      <div class=" bg-gray-200 rounded-none dark:bg-gray-700 px-12 py-5 mb-4"></div>
      <div class=" bg-gray-200 rounded-none dark:bg-gray-700 px-12 py-5 mb-4"></div>
      <div class=" bg-gray-200 rounded-none dark:bg-gray-700 px-12 py-5 mb-4"></div>
      <div class=" bg-gray-200 rounded-none dark:bg-gray-700 px-12 py-5 mb-4"></div>
      <div class=" bg-gray-200 rounded-none dark:bg-gray-700 px-12 py-5 mb-4"></div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default ButtonSizeSkeletion;
