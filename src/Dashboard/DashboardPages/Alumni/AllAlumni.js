import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import { useGetAllAlumniQuery } from "../../../features/Api/apiSlice";

const AllAlumni = () => {
  const tableHeading = [
    { name: "Name", id: 1 },
    { name: "Batch", id: 2 },
    { name: "Education", id: 3 },
    { name: "Blood", id: 4 },
  ];

  const {
    data: charityContentData,
    isLoading: isCharityLoading,
    isError: isCharityError,
    error: charityError,
  } = useGetAllAlumniQuery();
  console.log(charityContentData);

  let charityContent;

  if (isCharityLoading && !isCharityError) {
    charityContent = <Loading />;
  }
  if (!isCharityLoading && isCharityError) {
    charityContent = <ErrorAlert text={charityError} />;
  }
  if (!isCharityLoading && !isCharityError && charityContentData?.length === 0) {
    charityContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isCharityLoading && !isCharityError && charityContentData?.length > 0) {
    charityContent = (
      <>
        {" "}
        {charityContentData?.map((charity) => (
          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img
                    src={charity.profile_picture}
                    className="w-14 h-14 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                    alt="user1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Link
                    to={`/alumni/${charity.email}`}
                    className="mb-0 leading-normal text-sm text-primary"
                  >
                    {charity.name}
                  </Link>
                  <a
                    href={`mailto:${charity.email}`}
                    className=" mb-0 leading-tight text-xs text-slate-400"
                  >
                    {charity.email}
                  </a>
                  <a
                    className="mb-0 leading-tight text-xs text-slate-400"
                    href={`tel:${charity.phone}`}
                  >
                    {charity.phone}
                  </a>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <Link
                to={`/alumni/batch/${charity.graduation_year}`}
                className="mb-0 leading-tight text-xs text-slate-400"
              >
                {charity.graduation_year}
              </Link>
            </td>

            <td className="p-2 text-left align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="font-semibold leading-tight text-xs text-slate-400">
                {charity.major}
              </p>
              <p className=" mb-0 leading-tight text-xs text-slate-400">
                {charity.degree}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {charity.personal_information.blood_group}
              </p>
            </td>

            {/* edit and delete function */}
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
              <div className="flex">
                <Link
                  to={`/dashboard/profile/${charity.email}`}
                  className="font-semibold leading-tight text-xs text-slate-400 px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-slate-400 hover:text-secondary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  edit
                </Link>
                <Link to="" className="font-semibold leading-tight text-xs  px-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-slate-400 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <div className="w-full px-8">
      <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
          <h6>All Events</h6>
        </div>
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  {tableHeading.map((th) => (
                    <th className=" ps-2 pe-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      {th.name}
                    </th>
                  ))}
                  {/* blank for edit tab */}
                  <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                </tr>
              </thead>
              <tbody>{charityContent}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAlumni;
