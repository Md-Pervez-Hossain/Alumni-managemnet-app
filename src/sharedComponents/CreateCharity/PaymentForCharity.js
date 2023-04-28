import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContext/AuthProvider";

const PaymentForCharity = () => {
  const [batchYear, setBatchYear] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:8000/all-batches")
      .then((res) => res.json())
      .then((data) => {
        setBatchYear(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePaymentForCharity = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const name = user?.displayName;
    const img = user?.photoURL;
    const batchNumber = form.batchNumber.value;
    const details = form.details.value;
    const donationAmount = form.donationAmount.value;
    const paymentCharityInfo = {
      email,
      name,
      img,
      batchNumber,
      details,
      donationAmount,
    };
    console.log(paymentCharityInfo);
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl mb-3">Charity Heading</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            saepe natus eaque eum laudantium ullam ratione laboriosam, aut
            perspiciatis incidunt?
          </p>
          <img
            src="https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl mb-5">Please fill up !</h2>
          <form onSubmit={(event) => handlePaymentForCharity(event)}>
            <input
              type="text"
              className="input input-bordered w-full mb-5 "
              name="name"
              defaultValue={`${user?.displayName}`}
              readOnly
              required
            />
            <input
              type="email"
              className="input input-bordered w-full mb-5 "
              name="email"
              defaultValue={`${user?.email}`}
              readOnly
              required
            />
            <div className="form-control w-full mb-5 ">
              <select className="select select-bordered" name="batchNumber">
                {batchYear?.map((batchYear) => (
                  <option key={batchYear._id}>{batchYear.batchNumber}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="input input-bordered w-full mb-5 "
              name="donationAmount"
              placeholder="Enter Donation Amount"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full mb-5"
              placeholder="Make Note For Donation"
              name="details"
              required
            ></textarea>
            <button className="bg-primary rounded-md text-white py-3 text-center w-full">
              Pay For Donation
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-16 mb-5">Explore Who Gived Donation !</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Batch Year</th>
                <th>Amount</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Pervez Hossain</td>
                <td>2013</td>
                <td>500 Bdt</td>
                <td>pervez@gmail.com</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hemel Hasan</td>
                <td>2012</td>
                <td>5000 Bdt</td>
                <td>hemel@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentForCharity;
