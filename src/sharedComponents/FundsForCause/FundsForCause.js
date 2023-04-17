import React from "react";

const FundsForCause = () => {
  return (
    <div className="py-3 mb-16 mt-32 mx-auto relative bg-accent">
      <div className="m-2 py-16">
        <h2 className="text-2xl font-semibold text-center">
          Donate to NPY Women's Council
        </h2>
        <p className="text-center text-sm mt-4 mb-10">
          All donations are tax-deductible.
        </p>

        <div className="md:flex md:justify-center">
          <button className="px-8 py-4 w-full  md:w-auto mt-3   font-semibold bg-gray-400  focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary ">
            $20
          </button>

          <button className="px-8 py-4 w-full  md:w-auto md:ml-4 mt-3   font-semibold bg-gray-400   focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary ">
            $50
          </button>
          <button className="px-8 py-4 w-full  md:w-auto md:ml-4 mt-3   font-semibold bg-gray-400   focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary ">
            $100
          </button>
          <button className="px-8 py-4 w-full  md:w-auto md:ml-4 mt-3   font-semibold bg-gray-400   focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary ">
            $500
          </button>
          <button className="px-8 py-4 w-full  md:w-auto md:ml-4 mt-3   font-semibold bg-gray-400   focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary">
            $1000
          </button>

          <input
            className="px-8 py-4 w-full text-sm lg:w-auto md:ml-4 mt-3 font-semibold bg-gray-300  "
            type="text"
            placeholder="Others"
          />
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-secondary font-semibold text-primary px-8 py-4">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundsForCause;
