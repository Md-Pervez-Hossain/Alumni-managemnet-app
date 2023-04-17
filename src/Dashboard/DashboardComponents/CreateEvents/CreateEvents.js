import React, { useState } from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import {
  useGetAllBatchesQuery,
  useGetEventsCategoriesQuery,
} from "../../../features/Api/apiSlice";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";

const CreateEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCreateEvents = (event) => {
    event.preventDefault();
    console.log("events Clicked");
    const form = event.target;
    const event_title = form.eventsHeading.value;
    const category = form.eventsCategory.value;
    const description = form.eventsDetails.value;
    const date = selectedDate;
    const location = form.eventsLocation.value;
    const batch = form.eventsCategory.value;
    const image_url = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image_url);

    fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const eventsInfo = {
          event_title,
          image_url: data.data.display_url,
          category,
          description,
          date,
          location,
          batch,
        };
        fetch("https://alumni-managemnet-app-server.vercel.app/alumniEvents", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(eventsInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(eventsInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //  redux fetch event categories
  const {
    data: newsCategories,
    isError,
    isLoading,
    error,
  } = useGetEventsCategoriesQuery();

  let newsNameContent;
  if (isLoading && !isError) {
    newsNameContent = <Loading />;
  }
  if (!isLoading && isError) {
    newsNameContent = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError && newsCategories?.length === 0) {
    newsNameContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isLoading && !isError && newsCategories?.length > 0) {
    newsNameContent = (
      <>
        {newsCategories.map((eventCategory) => (
          <option value={eventCategory._id}>
            {eventCategory.eventCategory}
          </option>
        ))}
      </>
    );
  }

  // redux fetch batches
  const {
    data: allBatches,
    isError: isAllBatchesError,
    isLoading: isAllBatchesLoading,
    error: allBatchesError,
  } = useGetAllBatchesQuery();

  let allBatchesOptionsContent;
  if (isAllBatchesLoading && !isAllBatchesError) {
    allBatchesOptionsContent = <Loading />;
  }
  if (!isAllBatchesLoading && isAllBatchesError) {
    allBatchesOptionsContent = <ErrorAlert text={allBatchesError} />;
  }
  if (!isAllBatchesLoading && !isAllBatchesError && allBatches?.length === 0) {
    allBatchesOptionsContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isAllBatchesLoading && !isAllBatchesError && allBatches?.length > 0) {
    allBatchesOptionsContent = (
      <>
        {allBatches.map((allUniversityNames) => (
          <option value={allUniversityNames.batchNumber}>
            {allUniversityNames.batchNumber}
          </option>
        ))}
      </>
    );
  }

  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-5xl my-5">Events</h2>
      <form onSubmit={(event) => handleCreateEvents(event)}>
        <div className="grid md:grid-cols-2 gap-3 !my-2">
          <input
            type="text"
            placeholder="Events Heading"
            className="input input-bordered w-full"
            name="eventsHeading"
            required
          />
          <input
            type="text"
            placeholder="Events Location"
            className="input input-bordered w-full "
            name="eventsLocation"
            required
          />

          {/* <input
            type="time"
            placeholder="Events Time"
            className="input input-bordered w-full  mb-5 "
            name="time"
            required
          /> */}
          {/* <input
            type="date"
            placeholder="Events Date"
            className="input input-bordered w-full  mb-5 "
            name="eventsDates"
            required
          /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          <div className="form-control w-full ">
            <select className="select select-bordered " name="eventsCategory">
              {allBatchesOptionsContent}
            </select>
          </div>
          <div className="form-control w-full ">
            <select className="select select-bordered " name="eventsCategory">
              {newsNameContent}
            </select>
          </div>
          <div className=" input input-bordered w-full  mb-5 flex items-center">
            <Flatpickr
              data-enable-time
              value={selectedDate}
              onChange={(date) => setSelectedDate(date[0])}
              c
            />
          </div>
        </div>
        <div className="form-control w-full">
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            name="image"
          />
        </div>
        <div className="form-control w-full">
          <textarea
            className="textarea textarea-bordered w-full my-5"
            placeholder="Events Details"
            name="eventsDetails"
            required
          ></textarea>
        </div>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          {" "}
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;
