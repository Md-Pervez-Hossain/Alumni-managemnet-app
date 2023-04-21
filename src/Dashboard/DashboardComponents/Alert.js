import React from "react";

const Alert = ({ text }) => {
  return (
    <div className="relative w-full p-4 text-white rounded-lg bg-gradient-to-tl from-primary to-[#1E79DE]">
      {text}
    </div>
  );
};

export default Alert;
