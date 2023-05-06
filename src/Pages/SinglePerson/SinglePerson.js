import React, { useContext, useState } from "react";
import {
  FaAddressCard,
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaRegComment,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import {
  useGetAllAlumniQuery,
  useGetSingleAlumniQuery,
} from "../../features/Api/apiSlice";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";

const SinglePerson = () => {
  const { user } = useContext(AuthContext);
  // const singleAlumni = useLoaderData();

  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/alumni/")[1];
  //load data using redux
  const {
    data: singleAlumni,
    isLoading,
    isError,
    error,
  } = useGetSingleAlumniQuery(user?.email);
  console.log(singleAlumni);

  const {
    name,
    profile_picture,
    graduation_year,
    major,
    email,
    degree,
    department,
    phone,
    _id,
    phone_2,
    address,
    careers,
    education,
    personal_information,
  } = singleAlumni || {};
  // console.log(singleAlumni);

  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        {" "}
        <>
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center  ">
            {profile_picture ? (
              <>
                {" "}
                <div
                  className={` border-4 border-primary rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                  style={{
                    backgroundImage: `url(${profile_picture})`,
                    height: "300px",
                    width: "300px",
                  }}
                ></div>
              </>
            ) : (
              <>
                <div
                  style={{
                    backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                    height: "300px",
                    width: "300px",
                  }}
                  className={` border-4 border-primary rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                ></div>
              </>
            )}

            <div>
              <h2 className="text-4xl mb-3 text-primary ">{name}</h2>
              {user?.uid ? (
                <>
                  {email ? (
                    <>
                      {" "}
                      <div className="flex items-center gap-2">
                        <FaLocationArrow className="text-primary"></FaLocationArrow>
                        <p> Email : {email}</p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {phone ? (
                    <>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-primary"></FaPhone>{" "}
                        <p>Phone : {phone}</p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <p>
                    {phone_2 ? (
                      <>
                        <div className="flex items-center gap-2">
                          <FaPhone className="text-primary"></FaPhone>{" "}
                          <p>Phone 2 : {phone_2}</p>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </p>

                  <p>
                    {address?.street === "" &&
                    address?.city === "" &&
                    address?.state === "" &&
                    address?.zip === "" ? (
                      <></>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <FaAddressCard className="text-primary"></FaAddressCard>{" "}
                          Address :{" "}
                          {`${address?.street} ${address?.city} ${address?.state} ${address?.zip}`}
                        </div>
                      </>
                    )}
                  </p>
                </>
              ) : (
                <></>
              )}
              <div className="flex items-center gap-3 mt-3 cursor-pointer ">
                <FaFacebook className="text-primary hover:text-secondary duration-500 ease-in-out"></FaFacebook>
                <FaGithub className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGithub>
                <FaGoogle className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGoogle>
                <FaLinkedin className="text-primary hover:text-secondary duration-500 ease-in-out"></FaLinkedin>
              </div>
              <button className="bg-primary px-6 py-2 flex gap-2 items-center text-white font-semibold shadow-soft-xl  rounded-md mt-3">
                <FaRegComment className="inline-block" /> <h2>Message Me</h2>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <div>
                <div className="mb-5"></div>
              </div>
              <div>
                <h2 className="text-2xl my-8">Personal Information</h2>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Fathers Name</th>
                        <th>Mothers Name</th>
                        <th>Marital Status</th>
                        <th>Nationality</th>
                        <th>Hobbies</th>
                        <th>Languages</th>
                        <th>degree</th>
                        <th>graduation_year,</th>
                        <th>department,</th>
                        <th>major,</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          {" "}
                          {personal_information?.date_of_birth ? (
                            <>{personal_information?.date_of_birth}</>
                          ) : (
                            <></>
                          )}
                        </th>
                        <td>
                          {" "}
                          {personal_information?.gender ? (
                            <>{personal_information?.gender}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {" "}
                          {personal_information?.fathers_name ? (
                            <>{personal_information?.fathers_name}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {personal_information?.mothers_name ? (
                            <> {personal_information?.mothers_name}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {" "}
                          {personal_information?.marital_status ? (
                            <> {personal_information?.marital_status}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {" "}
                          {personal_information?.nationality ? (
                            <>{personal_information?.nationality}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {personal_information?.hobbies ? (
                            <>
                              {" "}
                              {personal_information?.hobbies?.map(
                                (hobby, i) => {
                                  return (
                                    <>
                                      <p key={i} className="inline-block ">
                                        {hobby}
                                      </p>
                                    </>
                                  );
                                }
                              )}{" "}
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {personal_information?.languages ? (
                            <>
                              {" "}
                              {personal_information?.languages?.map(
                                (language, i) => {
                                  return (
                                    <>
                                      <p key={i} className="inline-block ">
                                        {language}
                                      </p>
                                    </>
                                  );
                                }
                              )}{" "}
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>{degree ? <> {degree}</> : <></>}</td>
                        <td>
                          {graduation_year ? <> {graduation_year}</> : <></>}
                        </td>
                        <td>{department ? <> {department}</> : <></>}</td>
                        <td>{major ? <> {major}</> : <></>}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl my-8">Education</h2>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Institution</th>
                      <th>Major</th>
                      <th>Graduation Year</th>
                      <th>GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education ? (
                      <>
                        {education?.map((edu) => {
                          return (
                            <tr>
                              <th>
                                {edu?.degree ? <>{edu?.degree}</> : <></>}
                              </th>
                              <td>
                                {edu?.institution ? (
                                  <> {edu?.institution}</>
                                ) : (
                                  <></>
                                )}
                              </td>
                              <td>{edu?.major ? <>{edu?.major}</> : <></>}</td>
                              <td>
                                {edu?.graduation_year ? (
                                  <>{edu?.graduation_year}</>
                                ) : (
                                  <></>
                                )}
                              </td>
                              <td>{edu?.gpa ? <>{edu?.gpa}</> : <></>}</td>
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="text-2xl my-8">Career</h2>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Responsibility </th>
                      </tr>
                    </thead>
                    <tbody>
                      {careers ? (
                        <>
                          {" "}
                          {careers?.map((career, i) => {
                            return (
                              <tr>
                                <th>
                                  {career?.company ? (
                                    <>{career?.company}</>
                                  ) : (
                                    <></>
                                  )}
                                </th>
                                <td>
                                  {career?.position ? (
                                    <>{career?.position}</>
                                  ) : (
                                    <></>
                                  )}
                                </td>
                                <td>
                                  {career?.start_date ? (
                                    <>{career?.start_date}</>
                                  ) : (
                                    <></>
                                  )}
                                </td>

                                <td>
                                  {career?.end_date ? (
                                    <> {career?.end_date}</>
                                  ) : (
                                    <></>
                                  )}
                                </td>
                                <td>
                                  {career?.responsibilities ? (
                                    <>
                                      {career?.responsibilities?.map(
                                        (res, i) => {
                                          return (
                                            <>
                                              <p key={i}>{res}</p>
                                            </>
                                          );
                                        }
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }

  // slide button previous and next
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(8);

  const handlePrevious = () => {
    if (previous > 0) {
      setPrevious(previous - 8);
      setNext(next - 8);
    }
    console.log("Clicked Previous");
  };
  const handleNext = () => {
    setPrevious(previous + 8);
    setNext(next + 8);
    console.log("clicked next");
  };

  const {
    data: similarAlumni,
    isLoading: isSimiliarAlumniLoading,
    isError: isSimiliarAlumniError,
    error: similarAlumniError,
  } = useGetAllAlumniQuery();

  let similarAlumniContent;

  if (isSimiliarAlumniLoading && !isSimiliarAlumniError) {
    similarAlumniContent = <Loading />;
  }
  if (!isSimiliarAlumniLoading && isSimiliarAlumniError) {
    similarAlumniContent = <ErrorAlert text={similarAlumniError} />;
  }
  if (!isSimiliarAlumniLoading && !isSimiliarAlumniError) {
    similarAlumniContent = (
      <div>
        {similarAlumni
          ?.slice(previous, next)
          .filter((per) => per?._id !== _id)
          .map((person, i) => {
            return (
              <div key={i} className="flex items-center gap-5 mb-12 ">
                <div
                  className={` rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                  style={{
                    backgroundImage: `url(${person?.profile_picture})`,
                    height: "80px",
                    width: "80px",
                  }}
                ></div>
                <div>
                  <h2 className="text-lg">
                    {" "}
                    <Link to={`/alumni/${person?._id}`}>{person?.name}</Link>
                  </h2>
                  <Link to={`/alumni/${person?._id}`}>
                    <button className="text-secondary ">Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      <div className="bg-primary text-center text-white md:py-24 md:px-24 py-16 px-12 ">
        <div className="md:w-1/2 mx-auto ">
          <h2 className="md:text-4xl text-2xl mb-5">About {name}</h2>
          <hr className="border-2 w-24 mx-auto border-secondary " />
          <p className="mt-5">
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing
            elit, sed do eiusmod tempor
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto md:my-32 my-16">
        <div className="grid md:grid-cols-3 gap-12">
          <>
            <div className="lg:col-span-2">{content}</div>
          </>
          <div className="bg-accent md:p-5 p-2 lg:col-span-1">
            <h2 className="md:text-xl text-2xl md:mb-8 mb-5">
              Similar <br /> Batch Student
            </h2>
            <div>{similarAlumniContent}</div>

            <div className="flex items-center justify-end gap-3">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft className="text-primary cursor-pointer"></FaArrowLeft>
              </button>
              <button
                disabled={next > similarAlumni?.length}
                onClick={() => handleNext()}
              >
                <FaArrowRight className="text-primary   cursor-pointer"></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePerson;
