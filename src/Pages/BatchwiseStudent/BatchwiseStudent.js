import React from "react";
import student from "../../assets/batchwiseStudent.jpg";
import pervez from "../../assets/pervez.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BatchwiseStudent = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            src={student}
            alt=""
            className=" h-64 md:h-full   w-full brightness-75 "
          />
          <div className=" text-white  py-3 px-2 w-full md:w-1/2  mx-auto  absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 text-center  ">
            <div>
              <h2 className="md:text-4xl text-2xl  font-semibold md:mb-4">
                Batchwise Student
              </h2>
            </div>
            <hr className="md:mb-3 my-5 w-24 mx-auto border-2 border-secondary " />

            <div>
              <p className="my-4">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto md:my-32 my-16">
          <div className=" grid md:grid-cols-3 gap-5">
            <div className="bg-accent  ">
              <img src={pervez} alt="" className="h-90 w-full" />
              <div className="p-3">
                <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                  Pervez Hossain
                </h2>
                <div className="flex gap-3 my-3">
                  <div>
                    <p className="">
                      SSC Batch : <span className="font-normal ">2013</span>
                    </p>
                    <p className="">
                      Group : <span className="font-normal ">Science</span>
                    </p>
                  </div>
                  <div>
                    <p className="">
                      Blood Group : <span className="font-normal ">B+</span>
                    </p>
                    <p className="">
                      Profession :{" "}
                      <span className="font-normal ">Freelancer</span>
                    </p>
                  </div>
                </div>
                <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
                  Details
                </button>
              </div>
            </div>
            <div className="bg-accent  ">
              <img src={pervez} alt="" className="h-90 w-full" />
              <div className="p-3">
                <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                  Pervez Hossain
                </h2>
                <div className="flex gap-3 my-3">
                  <div>
                    <p className="">
                      SSC Batch : <span className="font-normal ">2013</span>
                    </p>
                    <p className="">
                      Group : <span className="font-normal ">Science</span>
                    </p>
                  </div>
                  <div>
                    <p className="">
                      Blood Group : <span className="font-normal ">B+</span>
                    </p>
                    <p className="">
                      Profession :{" "}
                      <span className="font-normal ">Freelancer</span>
                    </p>
                  </div>
                </div>
                <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
                  Details
                </button>
              </div>
            </div>
            <div className="bg-accent  ">
              <img src={pervez} alt="" className="h-90 w-full" />
              <div className="p-3">
                <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                  Pervez Hossain
                </h2>
                <div className="flex gap-3 my-3">
                  <div>
                    <p className="">
                      SSC Batch : <span className="font-normal ">2013</span>
                    </p>
                    <p className="">
                      Group : <span className="font-normal ">Science</span>
                    </p>
                  </div>
                  <div>
                    <p className="">
                      Blood Group : <span className="font-normal ">B+</span>
                    </p>
                    <p className="">
                      Profession :{" "}
                      <span className="font-normal ">Freelancer</span>
                    </p>
                  </div>
                </div>
                <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
                  Details
                </button>
              </div>
            </div>
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
