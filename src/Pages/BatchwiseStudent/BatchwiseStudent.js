import React, { useEffect, useState } from "react";
import student from "../../assets/batchwiseStudent.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import GallerySlider from "../../sharedComponents/GallerySlider/GallerySlider";
import AllEventsCard from "../../sharedComponents/Events/AllEvents/AllEventsCard";

const BatchWiseStudent = () => {
  const studentsOfTheBatch = useLoaderData();
  const { year } = useParams();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/events/batch/${year}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, [year]);

  return (
    <div className="bg-accent">
      <InnerPageHeader
        title={`Batch ${year}`}
        img={student}
        description={`Connecting  Graduates: Meet the Students of Our Batch`}
      />
      <div className="w-9/12 mx-auto md:py-32 py-16 ">
        <div className=" grid md:grid-cols-4 gap-10">
          {studentsOfTheBatch.map((singleAlumni) => (
            <AlumniBatchDataCard key={singleAlumni._id} singleAlumni={singleAlumni} />
          ))}
        </div>
        {studentsOfTheBatch?.length > 4 && (
          <div className="flex items-center justify-end gap-3 mt-5">
            <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
            <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
          </div>
        )}
      </div>

      <div className="bg-white py-10">
        <div className="w-9/12 mx-auto">
          <h2 className="text-3xl text-center">Upcoming Events for {year} </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {events.slice(0, 4).map((item) => (
              <AllEventsCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <GallerySlider year={year} />
    </div>
  );
};

export default BatchWiseStudent;
