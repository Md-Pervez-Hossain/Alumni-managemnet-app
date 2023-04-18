import React from "react";

const StatsCard = ({ text, number, icon, stats }) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal text-sm text-[#67748e]">
                  {text}
                </p>
                <h5 className="mb-0 font-body font-bold">
                  {number}
                  <span className="leading-normal text-xs font-weight-bolder text-lime-500">
                    {stats}
                  </span>
                </h5>
              </div>
            </div>
            <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                <i
                  className={`${icon} text-lg relative top-3.5 text-white`}
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
