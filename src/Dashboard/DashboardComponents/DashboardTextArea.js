import React from "react";

const DashboardTextArea = () => {
  return (
    <textarea
      name="textarea-name"
      rows="5"
      placeholder="Write your thoughts here..."
      class="focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
    ></textarea>
  );
};

export default DashboardTextArea;
