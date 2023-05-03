import React, { useContext, useEffect, useState } from "react";
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
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";

const SinglePerson = () => {
  const { user } = useContext(AuthContext);
  const [persons, setPersons] = useState([]);
  const singleAlumni = useLoaderData();
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
  } = singleAlumni;
  console.log(singleAlumni);
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
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/alumni")
      .then((res) => res.json())
      .then((data) => {
        setPersons(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
          <div className="lg:col-span-2 ">
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center  ">
              <div
                className={` border-4 border-primary rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                style={{
                  backgroundImage: `url(${profile_picture})`,
                  height: "300px",
                  width: "300px",
                }}
              ></div>
              <div>
                <h2 className="text-4xl mb-3 text-primary ">{name}</h2>
                {user?.uid ? (
                  <>
                    <div className="flex items-center gap-2">
                      <FaLocationArrow className="text-primary"></FaLocationArrow>
                      <p>Email : {email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-primary"></FaPhone>{" "}
                      <p>Phone : {phone}</p>
                    </div>

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
                      {address?.street === null &&
                      address?.city === null &&
                      address?.state === null &&
                      address?.zip === null ? (
                        <></>
                      ) : (
                        <>
                          {" "}
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
                <div></div>
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
                          {personal_information?.date_of_birth ? (
                            <>
                              {" "}
                              <th>DOB</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.gender ? (
                            <>
                              <th>Gender</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.fathers_name ? (
                            <>
                              <th>Fathers Name</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.mothers_name ? (
                            <>
                              {" "}
                              <th>Mothers Name</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.marital_status ? (
                            <>
                              {" "}
                              <th>Marital Status</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.nationality ? (
                            <>
                              {" "}
                              <th>Nationality</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {graduation_year ? (
                            <>
                              {" "}
                              <th>Graduation Year</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {major ? (
                            <>
                              {" "}
                              <th>Major</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {department ? (
                            <>
                              {" "}
                              <th>Department</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {degree ? (
                            <>
                              {" "}
                              <th>Degree</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.hobbies ? (
                            <>
                              <th>Hobies</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.languages ? (
                            <>
                              <th>Languages</th>
                            </>
                          ) : (
                            <></>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {personal_information?.date_of_birth ? (
                            <>
                              {" "}
                              <th>{personal_information?.date_of_birth}</th>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.gender ? (
                            <>
                              <td>{personal_information?.gender}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.fathers_name ? (
                            <>
                              {" "}
                              <td>{personal_information?.fathers_name}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.mothers_name ? (
                            <>
                              <td>{personal_information?.mothers_name}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.marital_status ? (
                            <>
                              {" "}
                              <td>{personal_information?.marital_status}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {personal_information?.nationality ? (
                            <>
                              {" "}
                              <td>{personal_information?.nationality}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {graduation_year ? (
                            <>
                              {" "}
                              <td>{graduation_year}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {major ? (
                            <>
                              <td>{major}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {department ? (
                            <>
                              {" "}
                              <td>{department}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          {degree ? (
                            <>
                              <td>{degree}</td>
                            </>
                          ) : (
                            <></>
                          )}

                          <td>
                            {" "}
                            {personal_information?.hobbies ? (
                              <p className="font-normal">
                                {personal_information?.hobbies.map(
                                  (hobby, i) => {
                                    return (
                                      <>
                                        <div className="inline-block  ">
                                          <p key={i}>{`${hobby} ,  `}</p>
                                        </div>
                                      </>
                                    );
                                  }
                                )}{" "}
                              </p>
                            ) : (
                              <></>
                            )}
                          </td>
                          <td>
                            {" "}
                            {personal_information?.languages ? (
                              <>
                                {" "}
                                <p className="font-normal">
                                  {personal_information?.languages.map(
                                    (language, i) => {
                                      return (
                                        <>
                                          <div className="inline-block  ">
                                            <p key={i}>{`${language} , `}</p>
                                          </div>
                                        </>
                                      );
                                    }
                                  )}{" "}
                                </p>
                              </>
                            ) : (
                              <></>
                            )}
                          </td>
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
                      {education?.map((edu) => {
                        return (
                          <>
                            <tr>
                              {edu?.degree ? (
                                <>
                                  {" "}
                                  <th>Degree</th>
                                </>
                              ) : (
                                <></>
                              )}
                              {edu?.institution ? (
                                <>
                                  {" "}
                                  <th>Institution</th>
                                </>
                              ) : (
                                <></>
                              )}
                              {edu?.major ? (
                                <>
                                  {" "}
                                  <th>Major</th>
                                </>
                              ) : (
                                <></>
                              )}
                              {edu?.graduation_year ? (
                                <>
                                  {" "}
                                  <th>Graduation Year</th>
                                </>
                              ) : (
                                <></>
                              )}
                              {edu?.gpa ? (
                                <>
                                  {" "}
                                  <th>GPA</th>
                                </>
                              ) : (
                                <></>
                              )}
                            </tr>
                          </>
                        );
                      })}
                    </thead>
                    <tbody>
                      {education ? (
                        <>
                          {education?.map((edu) => {
                            return (
                              <tr>
                                {edu?.degree ? (
                                  <>
                                    <th>{edu?.degree}</th>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {edu?.institution ? (
                                  <>
                                    {" "}
                                    <td>{edu.institution}</td>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {edu?.major ? (
                                  <>
                                    {" "}
                                    <td>{edu.major}</td>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {edu?.graduation_year ? (
                                  <>
                                    {" "}
                                    <td>{edu?.graduation_year}</td>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {edu?.gpa ? (
                                  <>
                                    {" "}
                                    <td>{edu?.gpa}</td>
                                  </>
                                ) : (
                                  <></>
                                )}
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
                <h2 className="text-2xl my-8">Carrers</h2>
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
                            {careers?.map((career, i) => {
                              return (
                                <tr>
                                  {career.company ? (
                                    <>
                                      <th>{career.company}</th>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                  {career.position ? (
                                    <>
                                      <td>{career.position}</td>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                  {career.start_date ? (
                                    <>
                                      <td>{career.start_date}</td>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                  <td>
                                    {career.end_date ? (
                                      <> {career.end_date}</>
                                    ) : (
                                      <> </>
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
          </div>
          <div className="bg-accent md:p-5 p-2 lg:col-span-1">
            <h2 className="md:text-3xl text-2xl md:mb-8 mb-5">
              Similler <br /> Batch Student
            </h2>
            {persons
              ?.slice(previous, next)
              .filter((per) => per._id !== _id)
              .map((person, i) => {
                return (
                  <div key={i} className="flex items-center gap-5 mb-12 ">
                    <div
                      className={` rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                      style={{
                        backgroundImage: `url(${person.profile_picture})`,
                        height: "80px",
                        width: "80px",
                      }}
                    ></div>
                    <div>
                      <h2 className="text-xl">{person.name}</h2>
                      <Link to={`/alumni/${person._id}`}>
                        <button className="text-secondary ">Details</button>
                      </Link>
                    </div>
                  </div>
                );
              })}

            <div className="flex items-center justify-end gap-3">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
              </button>
              <button
                disabled={next > persons.length}
                onClick={() => handleNext()}
              >
                <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePerson;
