import React from "react";
import student from "../../assets/batchwiseStudent.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";

const BatchWiseStudent = () => {
  const studentsOfTheBatch = useLoaderData();
  const { year } = useParams();
  console.log(year);

  return (
    <div>
      <InnerPageHeader
        title={`Batch ${year}`}
        img={student}
        description={`Connecting  Graduates: Meet the Students of Our Batch`}
      />
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
  );
};

export default BatchWiseStudent;
