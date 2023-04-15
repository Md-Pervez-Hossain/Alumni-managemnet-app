import React from "react";

const AlumniBatchDataCard = ({ singleAlumni }) => {
  const { name, profile_picture, graduation_year } = singleAlumni;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded ">
      <img src={profile_picture} className="object-cover w-full h-64" alt="" />
      <div className="py-3 px-2 ">
        <p className="text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-primary hover:text-deep-purple-accent-700"
          >
            {name}
          </a>
        </p>
        <p className="text-xs  tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
          >
            {graduation_year}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AlumniBatchDataCard;
