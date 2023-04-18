import React from "react";

const IconButton = ({ FaIconClass }) => {
  return (
    <button
      type="button"
      className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
    >
      <i className={FaIconClass}></i>
    </button>
  );
};

export default IconButton;
