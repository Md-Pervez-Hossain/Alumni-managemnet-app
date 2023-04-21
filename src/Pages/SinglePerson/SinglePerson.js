import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const SinglePerson = () => {
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
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing elit, sed
            do eiusmod tempor
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto md:my-32 my-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 col-span-1">
            <div>
              <img src={profile_picture} alt="" className="h-72 w-72 rounded-full mb-5" />
            </div>
            <div className="mb-4">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h2 className="text-2xl mb-4">{name}</h2>
                  <div className="mb-5">
                    <p>Graduation Year: {graduation_year} </p>
                    <p>Degree : {degree}</p>
                    <p>Department :{department}</p>
                    <p>Major : {major}</p>
                    <p>Email : {email}</p>
                    <p>Phone : {phone}</p>
                    {phone_2 ? (
                      <>
                        <p>Phone 2 : {phone_2}</p>
                      </>
                    ) : (
                      <></>
                    )}

                    <p>
                      Address :{" "}
                      {`${address.street} ${address.city} ${address.state} ${address.zip}`}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl mb-3">Personal Information</h2>
                  <p>Date_of_Birth : {personal_information.date_of_birth} </p>
                  <p>Gender : {personal_information.gender} </p>
                  <p>Fathers Name: {personal_information.fathers_name} </p>
                  <p>Mothers Name : {personal_information.mothers_name}</p>
                  <p>Marital Status :{personal_information.marital_status} </p>
                  <p>Nationality :{personal_information.nationality} </p>
                  <p className="font-normal">Hobbies : </p>
                  {personal_information.hobbies.map((hobby, i) => {
                    return (
                      <>
                        <p key={i}>{hobby}</p>
                      </>
                    );
                  })}
                  <p className="font-normal">languages : </p>
                  {personal_information.languages.map((language, i) => {
                    return (
                      <>
                        <p key={i}>{language}</p>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-2xl mb-3">Education</h2>
                <div className="grid md:grid-cols-2 gap-5 ">
                  {education.map((edu, i) => {
                    return (
                      <>
                        <div key={i}>
                          <p>Degree : {edu.degree}</p>
                          {edu.major ? (
                            <>
                              <p>major : {edu.major}</p>
                            </>
                          ) : (
                            <></>
                          )}
                          <p>institution : {edu.institution}</p>
                          <p>Graduation Year : {edu.graduation_year}</p>
                          <p>GPA : {edu.gpa}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-2xl mb-3">Carrers</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {careers?.map((career, i) => {
                    return (
                      <div key={i}>
                        <p>Company : {career.company}</p>
                        <p>Position : {career.position}</p>
                        <p>Start Date : {career.start_date}</p>
                        <p>End Date : {career.end_date}</p>
                        <h2>Responsibility : </h2>
                        {career.responsibilities.map((res, i) => {
                          return (
                            <>
                              <p key={i}>{res}</p>
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <FaFacebook className="text-primary hover:text-secondary duration-500 ease-in-out"></FaFacebook>
              <FaGithub className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGithub>
              <FaGoogle className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGoogle>
              <FaLinkedin className="text-primary hover:text-secondary duration-500 ease-in-out"></FaLinkedin>
            </div>
          </div>
          <div className="bg-accent md:p-5 p-2 col-span-1">
            <h2 className="md:text-3xl text-2xl md:mb-8 mb-5">
              Similler <br /> Batch Student
            </h2>
            {persons?.slice(previous, next).map((person, i) => {
              return (
                <div key={i} className="flex items-center md:gap-5 gap-3 mb-8">
                  <img
                    src={person.profile_picture}
                    alt=""
                    className="h-24 w-24 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl">{person.name}</h2>
                    <button className="text-secondary font-semibold">Details</button>
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-end gap-3">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
              </button>
              <button disabled={next > persons.length} onClick={() => handleNext()}>
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
