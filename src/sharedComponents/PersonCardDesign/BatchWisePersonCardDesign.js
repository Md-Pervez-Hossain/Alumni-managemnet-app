import React from "react";

const BatchWisePersonCardDesign = ({ singleAlumni }) => {
  const { name, profile_picture, graduation_year } = singleAlumni;
  return (
    <div>
      <div
        style={{
          height: "600px",
          backgroundImage: `url(${profile_picture})`,
        }}
        className=" bg-cover bg-center relative   shadow-2xl "
      >
        <div className="w-full p-5 bg-white absolute bottom-0 left-0">
          <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">{name}</h2>
          <div className="my-3">
            <p className="">
              SSC Batch : <span className="font-normal ">{graduation_year}</span>
            </p>
            <p className="">
              Group : <span className="font-normal ">Science</span>
            </p>
          </div>
          <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatchWisePersonCardDesign;
