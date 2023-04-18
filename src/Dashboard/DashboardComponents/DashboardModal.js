import React from "react";

const DashboardModal = () => {
  return (
    <div>
      <button
        type="button"
        data-toggle="modal"
        data-target="#import"
        className="inline-block px-8 py-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-fuchsia-500 text-fuchsia-500 hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:scale-100 active:border-fuchsia-500 active:bg-fuchsia-500 active:text-white hover:active:border-fuchsia-500 hover:active:bg-transparent hover:active:text-fuchsia-500 hover:active:opacity-75"
      >
        Import
      </button>

      <div
        className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear opacity-0 z-sticky outline-0"
        id="import"
        aria-hidden="true"
      >
        <div className="relative w-auto m-2 transition-transform duration-300 pointer-events-none sm:m-7 sm:max-w-125 sm:mx-auto lg:mt-48 ease-soft-out -translate-y-13">
          <div className="relative flex flex-col w-full bg-white border border-solid pointer-events-auto dark:bg-gray-950 bg-clip-padding border-black/20 rounded-xl outline-0">
            <div className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl">
              <h5 className="mb-0 leading-normal dark:text-white" id="ModalLabel">
                Import CSV
              </h5>
              <i className="ml-4 fas fa-upload"></i>
              <button
                type="button"
                data-toggle="modal"
                data-target="#import"
                className="fa fa-close w-4 h-4 ml-auto box-content p-2 text-black dark:text-white border-0 rounded-1.5 opacity-50 cursor-pointer -m-2 "
                data-dismiss="modal"
              ></button>
            </div>
            <div className="relative flex-auto p-4">
              <p>You can browse your computer for a file.</p>
              <input
                action="/file-upload"
                dropzone
                type="text"
                placeholder="Browse file..."
                className="dark:bg-gray-950 mb-4 focus:shadow-soft-primary-outline dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              ></input>
              <div className="min-h-6 pl-7 mb-0.5 block">
                <input
                  className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                  type="checkbox"
                  value=""
                  id="importCheck"
                  checked=""
                ></input>
                <label
                  className="inline-block mb-2 ml-1 font-bold cursor-pointer select-none text-xs text-slate-700 dark:text-white/80"
                  for="importCheck"
                >
                  I accept the terms and conditions
                </label>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end p-3 border-t border-solid shrink-0 border-slate-100 rounded-b-xl">
              <button
                type="button"
                data-toggle="modal"
                data-target="#import"
                className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-slate-600 to-slate-300 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
              >
                Close
              </button>
              <button
                type="button"
                data-toggle="modal"
                data-target="#import"
                className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
