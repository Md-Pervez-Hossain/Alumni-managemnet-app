import React from "react";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import { DirectoryDetails } from "./DirectoryDetails";

const AlumniDirectory = () => {
  return (
    <>
      <InnerPageHeader
        title="Batchwise Student        "
        description="learn more"
        img="https://media.licdn.com/dms/image/sync/C4E27AQFiJt2F_Hc5QA/articleshare-shrink_800/0/1680247637145?e=1681675200&v=beta&t=aomaSjgE9BSyz7kSIMQ_KdnKqySw5aH2EuIYUkY8d2Q"
      />
      <div className="w-9/12 mx-auto ">
        <div className="py-20 flex">
          <div className="w-1/2">
            <h1 className="mb-6 text-2xl font-semibold">Alumni Directory</h1>
            <p>
              There are many company Lorem ipsm dolor sitg amet, csetur adipicing elit,
              sed do eiusmod tempor dncint ut labore et dolore magna alis enim ad minim
              veniam, quis csetur adipicing elit, sed do eiusmod tempor dncint ut labore
              et dolore magna alis
            </p>
            <button className="mt-8 py-4 px-8 text-right text-primary font-bold bg-secondary">
              Learn More
            </button>
          </div>

          <div className="ms-10 w-1/2">
            <img
              className=""
              src="https://www.ceu.edu/sites/default/files/media/user-7596/alumni_reunion_photo_booth.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <DirectoryDetails />
    </>
  );
};

export default AlumniDirectory;
