import React from "react";

const CreateGallery = () => {
  const handleGallery = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const batchNumber = form.batchNumber.value;
    const details = form.details.value;
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
        console.log(data);
        const galleryInfo = {
          title,
          batchNumber,
          details,
          image_url: data.data.display_url,
        };

        console.log(galleryInfo);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Submit");
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-4xl my-5">Gallery</h2>

      <form onSubmit={(event) => handleGallery(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Gallery Title"
            className="input input-bordered w-full "
            name="title"
            required
          />
          <input
            type="text"
            placeholder="Batch"
            className="input input-bordered w-full "
            name="batchNumber"
            required
          />
        </div>
        <div className="form-control w-full mt-5 ">
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            name="image"
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="Gallery Details"
          name="details"
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          Submit News
        </button>
      </form>
    </div>
  );
};

export default CreateGallery;
