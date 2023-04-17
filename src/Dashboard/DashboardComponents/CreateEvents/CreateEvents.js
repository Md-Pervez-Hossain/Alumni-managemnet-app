import React from "react";

const CreateEvents = () => {
  const handleEvents = (event) => {
    event.preventDefault();
    console.log("events Clicked");
    const form = event.target;
    const eventsHeading = form.eventsHeading.value;
    const eventsCreatorName = form.eventsCreatorName.value;
    const eventsCategory = form.eventsCategory.value;
    const eventsDetails = form.eventsDetails.value;
    const eventsDate = form.eventsDates.value;
    const eventsLocation = form.eventsLocation.value;
    const batch = form.batch.value;
    const image = form.image.files[0];
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
        const eventsInfo = {
          eventsHeading,
          image: data.data.display_url,
          eventsCreatorName,
          eventsCategory,
          eventsDetails,
          eventsDate,
          eventsLocation,
          batch,
        };
        fetch("http://localhost:8000/alumniEvents", {
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
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-5xl my-5">Events</h2>
      <form onSubmit={(event) => handleEvents(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Events Heading"
            className="input input-bordered w-full"
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
          <input
            type="text"
            placeholder="Events Location"
            className="input input-bordered w-full "
            name="eventsLocation"
            required
          />
          <input
            type="text"
            placeholder="Batch"
            className="input input-bordered w-full "
            name="batch"
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
        <input
          type="date"
          placeholder="Events Date"
          className="input input-bordered w-full my-5 "
          name="eventsDates"
          required
        />
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="Events Details"
          name="eventsDetails"
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          {" "}
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;
