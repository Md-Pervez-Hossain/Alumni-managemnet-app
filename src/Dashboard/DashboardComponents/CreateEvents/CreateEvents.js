import React, { useState } from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

const CreateEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleEvents = (event) => {
    event.preventDefault();
    console.log("events Clicked");
    const form = event.target;
    const eventsHeading = form.eventsHeading.value;
    const eventsCreatorName = form.eventsCreatorName.value;
    const eventsCategory = form.eventsCategory.value;
    const eventsDetails = form.eventsDetails.value;
    const image = form.image.files[0];
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const newsInfo = {
          eventsHeading,
          image: data.data.display_url,
          eventsCreatorName,
          eventsCategory,
          eventsDetails,
          time,
        };
        console.log(newsInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-5xl my-5">Events</h2>
      <form onSubmit={(event) => handleEvents(event)}>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Events Heading"
            className="input input-bordered w-full "
            name="eventsHeading"
            required
          />
          <div className="form-control w-full ">
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              name="image"
            />
          </div>
          <input
            type="text"
            placeholder="Events Creator Name"
            className="input input-bordered w-full "
            name="eventsCreatorName"
            required
          />
          <div className="form-control w-full ">
            <select className="select select-bordered " name="eventsCategory">
              <option disabled selected>
                Seminer
              </option>
              <option>Fund Raising</option>
              <option>Leadership</option>
              <option>Picnic</option>
              <option>StudyTour</option>
            </select>
          </div>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="Events Details"
          name="eventsDetails"
          required
        ></textarea>
        <div>
          <Flatpickr
            data-enable-time
            value={selectedDate}
            onChange={(date) => setSelectedDate(date[0])}
            c
          />
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
