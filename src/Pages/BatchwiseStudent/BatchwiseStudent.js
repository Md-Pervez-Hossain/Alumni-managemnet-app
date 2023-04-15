import React, { useEffect } from "react";
import student from "../../assets/batchwiseStudent.jpg";
import pervez from "../../assets/pervez.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";

const BatchwiseStudent = () => {
  useEffect(() => {
    fetch(
      "https://alumni-managemnet-app-server.vercel.app/year wise/ batchwise"
    );
  }, []);

  return (
    <div>
      <div>
        <InnerPageHeader
          title={"BatchWise Student"}
          img={student}
          description={
            "There are many company Lorem ipsm dolor sitg amet, csetur "
          }
        ></InnerPageHeader>
        <div className="w-9/12 mx-auto md:my-32 my-16">
          <div className=" grid md:grid-cols-3 gap-10">
            <div
              style={{
                height: "600px",
                backgroundImage: `url(${pervez})`,
              }}
              className=" bg-cover bg-center relative   shadow-2xl "
            >
              <div className="w-full p-5 bg-white absolute bottom-0 left-0">
                <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                  Pervez Hossain
                </h2>
                <div className="my-3">
                  <p className="">
                    SSC Batch : <span className="font-normal ">2013</span>
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
            <div
              style={{
                height: "600px",
                backgroundImage: `url("https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg")`,
              }}
              className=" bg-cover bg-center relative   shadow-2xl "
            >
              <div className="w-full p-5 bg-white absolute bottom-0 left-0">
                <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                  Pervez Hossain
                </h2>
                <div className="my-3">
                  <p className="">
                    SSC Batch : <span className="font-normal ">2013</span>
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
            <div
              style={{
                height: "600px",
                backgroundImage: `url("https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=")`,
              }}
              className=" bg-cover bg-center relative   shadow-2xl "
            >
              <div className="w-full p-5 bg-white absolute bottom-0 left-0">
                <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                  Pervez Hossain
                </h2>
                <div className="my-3">
                  <p className="">
                    SSC Batch : <span className="font-normal ">2013</span>
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
