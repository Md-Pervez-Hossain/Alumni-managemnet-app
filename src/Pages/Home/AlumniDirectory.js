import React from "react";

const AlumniDirectory = () => {
  return (
    <>
      <div className="py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="mb-6 text-2xl font-semibold">Alumni Directory</h1>
          <p>
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing
            elit, sed do eiusmod tempor dncint ut labore et dolore magna alis
            enim ad minim veniam, quis csetur adipicing elit, sed do eiusmod
            tempor dncint ut labore et dolore magna alis
          </p>
          <button className="mt-8 py-4 px-8 text-right text-primary font-bold bg-secondary">
            Learn More
          </button>
        </div>

        <div>
          <img
            className=""
            src="https://www.ceu.edu/sites/default/files/media/user-7596/alumni_reunion_photo_booth.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AlumniDirectory;
