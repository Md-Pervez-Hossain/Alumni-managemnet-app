import { useState } from "react";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useGetAllAlumniQuery } from "../../features/Api/apiSlice";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import PersonCardSkeleton from "../../sharedComponents/Skeletion/PersonCardSkeletion";
import { useSelector } from "react-redux";
import { filterBySort } from "./alumniSortFilter";

export const DirectoryDetails = () => {
  //  getting data from the alumniFilter state slice
  const { isEmployed, sort, bloodGroup, majorWise, cityWise, batchWise } = useSelector(
    (state) => state.alumniFilter
  );

  //  for pagination, each page will show 9 items
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(9);

  // Getting all alumni data form server using redux - create api. from there we get the useGetAllAlumniQuery QUERy to load data
  const {
    data: alumniData,
    isError: alumniDataIsError,
    isLoading: alumniDataIsLoading,
    error: alumniDataError,
  } = useGetAllAlumniQuery();

  // this is the sort function where we need to provide the array in first parameter and the sort in the 2nd parameter
  const sortedArray = filterBySort(alumniData, sort);

  let alumniContent;

  if (alumniDataIsLoading && !alumniDataIsError) {
    alumniContent = (
      <div className="mx-auto w-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  lg:max-w-full">
          <PersonCardSkeleton /> <PersonCardSkeleton /> <PersonCardSkeleton />
          <PersonCardSkeleton /> <PersonCardSkeleton /> <PersonCardSkeleton />
          <PersonCardSkeleton /> <PersonCardSkeleton /> <PersonCardSkeleton />
        </div>
      </div>
    );
  }
  if (!alumniDataIsLoading && alumniDataIsError) {
    alumniContent = <ErrorAlert text={alumniDataError} />;
  }
  if (!alumniDataIsLoading && !alumniDataIsError && alumniData?.length === 0) {
    alumniContent = <ErrorAlert text="No Category Find" />;
  }
  if (!alumniDataIsLoading && !alumniDataIsError && alumniData?.length > 0) {
    alumniContent = (
      <>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  lg:max-w-full">
          {sortedArray.slice(previous, next).map((singleAlumni) => (
            <AlumniBatchDataCard key={singleAlumni._id} singleAlumni={singleAlumni} />
          ))}
        </div>
      </>
    );
  }

  const handlePrevious = () => {
    console.log("previous clicked");
    if (previous > 0) {
      setPrevious(previous - 9);
      setNext(next - 9);
    }
  };

  const handleNext = () => {
    console.log("next clicked");
    setPrevious(previous + 9);
    setNext(next + 9);
  };
  return (
    <div className=" mx-auto ">
      {alumniContent}
      <div className="flex items-center justify-end gap-3 my-5">
        <button
          onClick={() => handlePrevious()}
          className="hover:text-secondary text-primary duration-500 ease-in-out"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next > alumniData?.length}
          onClick={() => handleNext()}
          className="hover:text-secondary text-primary duration-500 ease-in-out"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};
