import React from "react";

const MembershipPackageCard = () => {
  return (
    <div class="w-full max-w-full px-3 mb-6 lg:w-4/12 lg:mb-0 shrink-0">
      <div class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div
          pricing-plans
          class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 text-center pb-4"
        >
          <span class="py-2.2 px-3.6 text-xs rounded-blur inline-block whitespace-nowrap text-center bg-gray-200 align-baseline font-bold uppercase leading-none text-slate-700">
            Premium
          </span>
          <h1 active monthly class="mt-2 font-semibold">
            <small>$</small>89
          </h1>
          <h1 annual class="hidden mt-2 font-semibold">
            <small>$</small>159
          </h1>
        </div>
        <div class="flex-auto p-6 pt-0 text-center lg:text-left">
          <div class="flex justify-center p-2 lg:justify-start">
            <div class="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i class="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span class="pl-4">10 team members</span>
            </div>
          </div>
          <div class="flex justify-center p-2 lg:justify-start">
            <div class="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i class="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span class="pl-4">40GB Cloud storage</span>
            </div>
          </div>
          <div class="flex justify-center p-2 lg:justify-start">
            <div class="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i class="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span class="pl-4">Integration help</span>
            </div>
          </div>
          <div class="flex justify-center p-2 lg:justify-start">
            <div class="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-green-600 to-lime-400">
              <i class="relative text-white fas fa-check -top-1 text-3xs"></i>
            </div>
            <div>
              <span class="pl-4">Sketch Files</span>
            </div>
          </div>
          <div class="flex justify-center p-2 lg:justify-start">
            <div class="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-slate-600 to-slate-300">
              <i class="relative text-white fas fa-minus opacity-80 -top-1 text-3xs"></i>
            </div>
            <div>
              <span class="pl-4">API Access</span>
            </div>
          </div>
          <div class="flex justify-center p-2 lg:justify-start">
            <div class="inline-block w-6 h-6 text-center text-black bg-center fill-current shadow-soft-2xl rounded-circle stroke-none bg-gradient-to-tl from-slate-600 to-slate-300">
              <i class="relative text-white fas fa-minus opacity-80 -top-1 text-3xs"></i>
            </div>
            <div>
              <span class="pl-4">Complete documentation</span>
            </div>
          </div>
          <a
            href="javascript:;"
            class="inline-block px-6 py-3 mt-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
          >
            Try Premium
            <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MembershipPackageCard;
