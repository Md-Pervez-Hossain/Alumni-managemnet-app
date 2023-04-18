import React from "react";
import student from "../../assets/batchwiseStudent.jpg";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import pervez from "../../assets/pervez.jpg";
=======
>>>>>>> 1bb868742c20713fc3392c1953309566059460c2
>>>>>>> origin/staging-rony
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import GallerySlider from "../../sharedComponents/GallerySlider/GallerySlider";

const BatchWiseStudent = () => {
  const studentsOfTheBatch = useLoaderData();
  const { year } = useParams();
  console.log(year);

  return (
<<<<<<< HEAD
    <div className="bg-accent">
      <InnerPageHeader
        title={`Batch ${year}`}
        img={student}
        description={`Connecting  Graduates: Meet the Students of Our Batch`}
      />
      <div className="w-9/12 mx-auto md:py-32 py-16 ">
        <div className=" grid md:grid-cols-4 gap-10">
          {studentsOfTheBatch.map((singleAlumni) => (
            <AlumniBatchDataCard singleAlumni={singleAlumni} />
          ))}
        </div>
        <div className="flex items-center justify-end gap-3 mt-5">
          <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
          <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
=======
    <div>
<<<<<<< HEAD
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
=======
      <div className="relative">
        <img
          src={student}
          alt=""
          className=" h-64 md:h-full   w-full brightness-75 "
        />
        <div className=" text-white py-3 px-2 w-full md:w-1/2  mx-auto  absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 text-center  ">
          <h2 className="md:text-4xl text-2xl  font-semibold md:mb-4">
            Batchwise Student
          </h2>
          <hr className="md:mb-3 my-1" />
          <p className="mb-4">
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing
            elit, sed do eiusmod tempor dncint ut labore et dolore magna alis
            enim ad minim veniam, quis
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto md:my-32 my-16">
        <div className=" grid md:grid-cols-3 gap-5">
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
>>>>>>> 1bb868742c20713fc3392c1953309566059460c2
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
<<<<<<< HEAD
            </div>
          </div>
        </div>
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
=======
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
          <div className="bg-accent  ">
            <img
              src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2023/01/alumni-main-usahs.jpg?fit=1063%2C1079&ssl=1"
              alt=""
              className="h-80 w-full"
            />
            <div className="p-3">
              <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
                Batchwise Student Heading
              </h2>
              <p className="mb-3">
                There are many company Lorem ipsm dolor sitg amet, csetur
                adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
                magna alis enim ad minim veniam, quis
              </p>
              <button className="bg-secondary text-primary px-8 py-2 text-xl font-semibold ">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-5">
          <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
          <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
>>>>>>> 1bb868742c20713fc3392c1953309566059460c2
>>>>>>> origin/staging-rony
        </div>
      </div>
      <GallerySlider year={year} />
    </div>
  );
};

export default BatchWiseStudent;
