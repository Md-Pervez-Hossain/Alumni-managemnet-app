import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../UseContext/AuthProvider";
import { toast } from "react-toastify";

const UpdateCharity = () => {
  const charityData = useLoaderData();
  console.log(charityData);
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
  const handleUpdateCharity = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image_url = form.image.files[0];
    const batchNumber = form.batchNumber.value;
    const goal_amount = form.goal_amount.value;
    const deadline = form.deadline.value;
    const city = form.city.value;
    const state = form.state.value;
    const country = form.country.value;
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
        const updatedCharityInfo = {
          title,
          goal_amount,
          batchNumber,
          deadline,
          city,
          state,
          country,
          details,
          image_url: data?.data?.display_url,
          time,
        };

        console.log(updatedCharityInfo);
        form.reset();
        fetch(`http://localhost:8000/charity/${charityData._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCharityInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("SuccessFully Updated");
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
      <h2 className="text-4xl my-5">Charity</h2>

      <form onSubmit={(event) => handleUpdateCharity(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Charity Title"
            className="input input-bordered w-full "
            name="title"
            defaultValue={charityData?.title}
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
          <input
            type="text"
            placeholder="Goal Amount"
            className="input input-bordered w-full "
            name="goal_amount"
            defaultValue={charityData?.goal_amount}
            required
          />
          <input
            type="date"
            placeholder="DeadLine"
            className="input input-bordered w-full "
            name="deadline"
            defaultValue={charityData?.deadline}
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          <input
            type="text"
            placeholder="City"
            className="input input-bordered w-full "
            name="city"
            defaultValue={charityData?.city}
            required
          />
          <input
            type="text"
            placeholder="State"
            className="input input-bordered w-full "
            name="state"
            defaultValue={charityData?.state}
            required
          />
          <input
            type="text"
            placeholder="Country "
            className="input input-bordered w-full "
            name="country"
            defaultValue={charityData?.country}
            required
          />
        </div>
        <div className="form-control w-full mt-5 ">
          <select
            required
            className="select select-bordered"
            name="batchNumber"
          >
            {batchYear?.map((batchYear) => (
              <option
                defaultValue={charityData?.batchNumber}
                key={batchYear._id}
              >
                {batchYear.batchNumber}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="Charity Details"
          name="details"
          defaultValue={charityData?.details}
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateCharity;
