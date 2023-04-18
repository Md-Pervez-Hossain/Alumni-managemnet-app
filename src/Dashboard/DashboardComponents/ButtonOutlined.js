import React from "react";

const ButtonOutlined = ({ children }) => {
  return (
    <button
      type="button"
      className="inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-fuchsia-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500"
    >
      {children}
    </button>
  );
};

export default ButtonOutlined;
