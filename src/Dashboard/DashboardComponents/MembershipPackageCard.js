import React from "react";

const MembershipPackageCard = () => {
  return (
    <div className="w-full max-w-full px-3 mb-6 lg:w-4/12 lg:mb-0 shrink-0">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div
          pricing-plans
          className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 text-center pb-4"
        >
          <span className="py-2.2 px-3.6 text-xs rounded-blur inline-block whitespace-nowrap text-center bg-gray-200 align-baseline font-bold uppercase leading-none text-slate-700">
            Premium
          </span>
          <h1 active monthly className="mt-2 font-semibold">
            <small>$</small>89
          </h1>
          <h1 annual className="hidden mt-2 font-semibold">
            <small>$</small>159
          </h1>
        </div>
        <div className="flex-auto p-6 pt-0 text-center lg:text-left">
          <div className="flex justify-center p-2 lg:justify-start">
            <div className="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i className="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span className="pl-4">10 team members</span>
            </div>
          </div>
          <div className="flex justify-center p-2 lg:justify-start">
            <div className="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i className="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span className="pl-4">40GB Cloud storage</span>
            </div>
          </div>
          <div className="flex justify-center p-2 lg:justify-start">
            <div className="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i className="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span className="pl-4">Integration help</span>
            </div>
          </div>
          <div className="flex justify-center p-2 lg:justify-start">
            <div className="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i className="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span className="pl-4">Sketch Files</span>
            </div>
          </div>
          <div className="flex justify-center p-2 lg:justify-start">
            <div className="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-slate-600 to-slate-300">
              <i className="relative text-white fas fa-minus opacity-80 -top-1 text-3xs"></i>
            </div>
            <div>
              <span className="pl-4">API Access</span>
            </div>
          </div>
          <div className="flex justify-center p-2 lg:justify-start">
            <div className="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-slate-600 to-slate-300">
              <i className="relative text-white fas fa-minus opacity-80 -top-1 text-3xs"></i>
            </div>
            <div>
              <span className="pl-4">Complete documentation</span>
            </div>
          </div>
          <a
            href="javascript:;"
            className="inline-block px-6 py-3 mt-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-primary to-[#1E79DE] leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
          >
            Try Premium
            <i className="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MembershipPackageCard;
