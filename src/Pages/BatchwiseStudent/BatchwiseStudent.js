import React, { useEffect } from "react";
import student from "../../assets/batchwiseStudent.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";

const BatchwiseStudent = () => {
  const studentsOfTheBatch = useLoaderData();
  return (
    <div>
      <div>
        <div className="relative">
          <img src={student} alt="" className=" h-64 md:h-full   w-full brightness-75 " />
          <div className=" text-white  py-3 px-2 w-full md:w-1/2  mx-auto  absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 text-center  ">
            <div>
              <h2 className="md:text-4xl text-2xl  font-semibold md:mb-4">
                Batchwise Student
              </h2>
            </div>
            <hr className="md:mb-3 my-5 w-24 mx-auto border-2 border-secondary " />

            <div>
              <p className="my-4">
                There are many company Lorem ipsm dolor sitg amet, csetur adipicing elit,
                sed do eiusmod tempor dncint ut labore et dolore magna alis enim ad minim
                veniam, quis
              </p>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto md:my-32 my-16">
          <div className=" grid md:grid-cols-3 gap-10">
            {studentsOfTheBatch.map((singleAlumni) => (
              <AlumniBatchDataCard singleAlumni={singleAlumni} />
            ))}
          </div>
          <div className="flex items-center justify-end gap-3 mt-5">
            <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
            <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchwiseStudent;
