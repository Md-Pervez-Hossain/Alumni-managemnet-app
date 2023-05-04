import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../UseContext/AuthProvider";
import { toast } from "react-toastify";

const UpdateStory = () => {
  const updateStoryData = useLoaderData();
  console.log(updateStoryData);
  const [batchYear, setBatchYear] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/all-batches")
      .then((res) => res.json())
      .then((data) => {
        setBatchYear(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const updateSuccessStory = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image_url = form.image.files[0];
    const batchNumber = form.batchNumber.value;
    const details = form.details.value;
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image_url);
    fetch(
      "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const successFullStoryInfo = {
          title,
          batchNumber,
          details,
          image_url: data?.data?.display_url,
          time,
          name: user?.displayName,
          email: user?.email,
          img: user?.photoURL,
          comments: 0,
          likes: 0,
        };

        console.log(successFullStoryInfo);
        form.reset();

        fetch(`http://localhost:8000/successFullStory/${updateStoryData._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(successFullStoryInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("Successfully Updateed");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-4xl my-5">Update SuccessFull Story</h2>

      <form onSubmit={(event) => updateSuccessStory(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="SuccessFull Story Title"
            className="input input-bordered w-full "
            name="title"
            defaultValue={updateStoryData?.title}
            required
          />
          <div className="form-control w-full  ">
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              name="image"
              required
            />
          </div>
        </div>
        <div className="form-control w-full mt-5 ">
          <select
            required
            className="select select-bordered"
            name="batchNumber"
          >
            {batchYear?.map((batchYear) => (
              <option key={batchYear._id}>{batchYear.batchNumber}</option>
            ))}
          </select>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="SuccessFull Story Details"
          name="details"
          defaultValue={updateStoryData?.details}
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateStory;
