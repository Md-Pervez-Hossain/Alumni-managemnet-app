import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaymnetSuccessfull = () => {
  return (
    <div className="w-9/12 mx-auto my-16">
      <div>
        <h2 className="text-2xl ">Congratulations !!!!</h2>
        <h2 className="text-2xl mb-10 ">
          Your Payment Has Been SuccessFully Done .
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Charity Name</th>
                <th>Amount</th>
                <th>TransTion Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Pervez Hossain</td>
                <td>Funds For Poor Student</td>
                <td>500 Bdt</td>
                <td>12fjsdfj9509i</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button className="bg-secondary px-6 py-3 font-semibold text-priamry mt-5">
            Print
          </button>
        </div>
      </div>
      <div>
        <h2 className="my-10 text-4xl">Explorer More Charity</h2>
        <div className="grid lg:grid-cols-4 gap-5">
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
              }}
            ></div>
            <div>
              <h2 className="my-3 text-2xl">Charity Heading</h2>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                iusto consectetur eos similique placeat id porro soluta neque
                optio non!
              </p>
              <button className="bg-secondary px-6 py-3 ">Donation</button>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
              }}
            ></div>
            <div>
              <h2 className="my-3 text-2xl">Charity Heading</h2>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                iusto consectetur eos similique placeat id porro soluta neque
                optio non!
              </p>
              <button className="bg-secondary px-6 py-3 ">Donation</button>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
              }}
            ></div>
            <div>
              <h2 className="my-3 text-2xl">Charity Heading</h2>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                iusto consectetur eos similique placeat id porro soluta neque
                optio non!
              </p>
              <button className="bg-secondary px-6 py-3 ">Donation</button>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
              }}
            ></div>
            <div>
              <h2 className="my-3 text-2xl">Charity Heading</h2>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                iusto consectetur eos similique placeat id porro soluta neque
                optio non!
              </p>
              <button className="bg-secondary px-6 py-3 ">Donation</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 my-5">
          <button>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button>
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymnetSuccessfull;
