import React from "react";
import { Link } from "react-router-dom";

const AlumniBatchDataCard = ({ singleAlumni }) => {
  const {
    name,
    profile_picture,
    personal_information,
    graduation_year,
    _id,
    email,
  } = singleAlumni;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded ">
      {profile_picture ? (
        <>
          <img
            src={profile_picture}
            className="object-cover w-full h-64"
            alt={name}
          />
        </>
      ) : (
        <>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU"
            className="object-cover w-full h-64"
            alt={name}
          />
        </>
      )}
      <div className="py-3 px-2 ">
        <p className="text-xs font-semibold tracking-wide uppercase">
          <Link
            // to={`/alumni/${graduation_year}/${name}`}
            to={`/alumni/${email}`}
            className="transition-colors duration-200 text-primary hover:text-deep-purple-accent-700"
          >
            {name ? (
              <> {name}</>
            ) : (
              <>
                <p>Update Name</p>
              </>
            )}
          </Link>
        </p>
        <p className="text-xs  tracking-wide uppercase">
          <Link
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
          >
            {graduation_year ? (
              <>{graduation_year}</>
            ) : (
              <>
                <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                  Update Graduation Year
                </p>
              </>
            )}
          </Link>
        </p>
        <p className="text-xs  tracking-wide uppercase">
          <Link
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
          >
            {personal_information?.blood_group ? (
              <>{personal_information?.blood_group}</>
            ) : (
              <>
                <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                  Update Blood Group
                </p>
              </>
            )}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AlumniBatchDataCard;
