import React from "react";
import DashboardTable from "../../DashboardComponents/DashboardTable";
import { Link } from "react-router-dom";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import { useGetAllCharityQuery } from "../../../features/Api/apiSlice";

const AllCharity = () => {
  const tableHeading = [
    { name: "Title", id: 1 },
    { name: "Target", id: 2 },
    { name: "Location", id: 3 },
    { name: "Batch", id: 4 },
    { name: "Target ", id: 5 },
    { name: "Date ", id: 6 },
  ];

  const {
    data: charityContentData,
    isLoading: isCharityLoading,
    isError: isCharityError,
    error: charityError,
  } = useGetAllCharityQuery();
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
                    src={charity.image_url}
                    className="!w-10 !h-10 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                    alt="user1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">{charity.title}</h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    {/* john@creative-tim.com */}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              {/* <p className="mb-0 font-semibold leading-tight text-xs">{event.location}</p> */}
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {charity.goal_amount}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">{` ${charity.state}, ${charity.city}, ${charity.country}  `}</p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {charity.batchNumber}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {charity.goal_amount}
              </p>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">
                {Date(charity.deadline)?.replace(/ GMT[+\-]\d{4}.*$/, "")}
              </span>
            </td>

            {/* edit function */}
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <Link to="" className="font-semibold leading-tight text-xs text-slate-400">
                Edit
              </Link>
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

export default AllCharity;
