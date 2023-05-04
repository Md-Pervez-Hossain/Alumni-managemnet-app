import React from "react";
import DashboardTable from "../../DashboardComponents/DashboardTable";
import { Link } from "react-router-dom";
import { useGetEventsQuery } from "../../../features/Api/apiSlice";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";

const AllEvents = () => {
  const tableHeading = [
    { name: "Title", id: 1 },
    { name: "Location", id: 2 },
    { name: "Batch", id: 3 },
    { name: "Date", id: 5 },
  ];

  const {
    data: eventsContentData,
    isLoading: isEventsLoading,
    isError: isEventsError,
    error: eventsError,
  } = useGetEventsQuery();
  const { event_title, _id, category, batch, date, location, image_url } =
    eventsContentData || {};
  console.log(eventsContentData);

  let eventsContent;

  if (isEventsLoading && !isEventsError) {
    eventsContent = <Loading />;
  }
  if (!isEventsLoading && isEventsError) {
    eventsContent = <ErrorAlert text={eventsError} />;
  }
  if (!isEventsLoading && !isEventsError && eventsContentData?.length === 0) {
    eventsContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isEventsLoading && !isEventsError && eventsContentData?.length > 0) {
    eventsContent = (
      <>
        {" "}
        {eventsContentData?.map((event) => (
          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img
                    src={event.image_url}
                    className="!w-10 !h-10 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                    alt="user1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">{event.event_title}</h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    {/* john@creative-tim.com */}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              {/* <p className="mb-0 font-semibold leading-tight text-xs">{event.location}</p> */}
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {event.location}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">{event.batch}</p>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">
                {Date(event.date)?.replace(/ GMT[+\-]\d{4}.*$/, "")}
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
              <tbody>{eventsContent}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
