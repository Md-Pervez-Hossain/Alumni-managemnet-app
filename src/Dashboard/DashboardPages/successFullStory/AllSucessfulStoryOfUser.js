import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteSuccessfulStoriesMutation,
  useGetAllSuccessfulStoriesOfAUserQuery,
  useGetAllSuccessfulStoriesQuery,
} from "../../../features/Api/apiSlice";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import { toast } from "react-hot-toast";

const AllSuccessFulStoryOfUser = () => {
  const { user } = useContext(AuthContext);

  const handleSuccessStoryEdit = (story) => {
    console.log(story);
  };
  const tableHeading = [
    { name: "Title", id: 1 },
    { name: "Author_name & email", id: 4 },
    { name: "Batch", id: 2 },
    { name: "Date", id: 3 },
    { name: "Action", id: 5 },
  ];

  const {
    data: userSuccessStoryContentData,
    isLoading: isSuccessLoading,
    isError: isSuccessError,
    error: successError,
  } = useGetAllSuccessfulStoriesOfAUserQuery(user?.email);
  // } = useGetAllSuccessfulStoriesOfAUserQuery(user?.email);

  console.log(userSuccessStoryContentData)

  // mutation for deleting data
  const [
    deleteAlumni,
    {
      data,
      isSuccess: isDeleteSuccess,
      isLoading: isDeleteLoading,
      isError: isDeleteError,
      error: errorDelete,
    },
  ] = useDeleteSuccessfulStoriesMutation();

  // delete function handler
  const handleDelete = (_id) => {
    const confirmDelete = window.confirm("do you want to delete?");
    if (confirmDelete) {
      deleteAlumni(_id);
    }
  };
  // re render components on status change
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully toasted!");
    }
    if (isDeleteError) {
      toast.error(errorDelete.message);
    }
  }, [errorDelete, isDeleteError, isDeleteSuccess]);

  //handle approve

  const handleApprove = (_id) => {
    console.log(_id);
    const agree = window.confirm(
      `Are you Sure . You want to Approve The SuccessStory`
    );
    if (agree) {
      fetch(
        `https://alumni-managemnet-app-server.vercel.app/approveSuccessStory/${_id}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Successfully Approved");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleUnApprove = (_id) => {
    const agree = window.confirm(
      `Are you Sure . You want to unApprove The SuccessStory`
    );
    if (agree) {
      fetch(
        `https://alumni-managemnet-app-server.vercel.app/unApproveSuccessStory/${_id}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            toast.success("Successfully unApproved");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  // render components conditionally

  let successContent;

  if (isSuccessLoading && !isSuccessError) {
    successContent = <Loading />;
  }
  if (!isSuccessLoading && isSuccessError) {
    successContent = <ErrorAlert text={successError} />;
  }
  if (
    !isSuccessLoading &&
    !isSuccessError &&
    userSuccessStoryContentData?.length === 0
  ) {
    successContent = <ErrorAlert text="No Data Found." />;
  }
  if (!isSuccessLoading && !isSuccessError && userSuccessStoryContentData?.length > 0) {
    successContent = (
      <>
        {" "}
        {userSuccessStoryContentData?.map((story) => (
          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                {story?.image_url ? (
                  <>
                    <div>
                      <img
                        src={story?.image_url}
                        className="!w-10 !h-10 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                        alt="user1"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <img
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        className="!w-10 !h-10 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                        alt="user1"
                      />
                    </div>
                  </>
                )}

                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">
                    {story?.title ? (
                      
                      <Link to={`/successFullStory/${story?._id}`}>
                    <p className="mb-0 leading-normal text-sm break-normal">
                      {story?.title?.slice(0, 50)}
                    </p>
                  </Link>
                    ) : (
                      <>
                        <p>Title Missing</p>
                      </>
                    )}
                  </h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400"></p>
                </div>
              </div>
            </td>

            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {story?.name ? (
                  <> {story?.name } <br /> {story?.email}</>
                ) : (
                  <>
                    <p>Batch missing</p>
                  </>
                )}{" "}
              </p>
            </td>

            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {story?.batchNumber ? (
                  <> {story?.batchNumber}</>
                ) : (
                  <>
                    <p>Batch missing</p>
                  </>
                )}{" "}
              </p>
            </td>

            <td className="p-2 text-left align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">
                {story?.time ? (
                  <> {Date(story?.time)?.replace(/ GMT[+\-]\d{4}.*$/, "")}</>
                ) : (
                  <>Time Missing</>
                )}{" "}
              </span>
            </td>

            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex gap-2 font-semibold">
                {story?.status === true ? (
                  <>
                    <button onClick={() => handleUnApprove(story?._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-green-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleApprove(story?._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-secondary"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </td>

            {/* edit and delete function */}
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
              <div className="flex">
                <Link
                  to={`/dashboard/successfulStory/edit/${story?._id}`}
                  className="font-semibold leading-tight text-xs text-slate-400 px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-400 hover:text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <Link
                  onClick={() => handleDelete(story._id)}
                  to=""
                  className="font-semibold leading-tight text-xs  px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-400 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
          <h6>Your Successful Stories. Total stories are {userSuccessStoryContentData?.length}.</h6>
        </div>
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  {tableHeading?.map((th) => (
                    <th className=" ps-2 pe-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      {th?.name ? (
                        <>{th?.name}</>
                      ) : (
                        <>
                          {" "}
                          <p>Missing</p>
                        </>
                      )}
                    </th>
                  ))}
                  {/* blank for edit tab */}
                  <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                </tr>
              </thead>
              <tbody>{successContent}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllSuccessFulStoryOfUser;
