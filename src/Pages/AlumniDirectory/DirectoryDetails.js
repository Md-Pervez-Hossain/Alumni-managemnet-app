import { useEffect, useState } from "react";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useGetAllAlumniQuery } from "../../features/Api/apiSlice";
import ButtonSizeSkeletion from "../../sharedComponents/Skeletion/ButtonSizeSkeletion";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import Loading from "../../sharedComponents/Loading/Loading";
import CardsWithAuthorSkeletion from "../../sharedComponents/Skeletion/CardsWithAuthorSkeletion";
import PersonCardSkeleton from "../../sharedComponents/Skeletion/PersonCardSkeletion";
import { useSelector } from "react-redux";

export const DirectoryDetails = () => {
  const { isEmployed, sort, bloodGroup, majorWise, cityWise, batchWise } = useSelector(
    (state) => state.alumniFilter
  );
  console.log(isEmployed, sort);

  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(9);

  const {
    data: alumniData,
    isError: alumniDataIsError,
    isLoading: alumniDataIsLoading,
    error: alumniDataError,
  } = useGetAllAlumniQuery();

  const filterBySort = (alumni) => {
    if (!alumni || !Array.isArray(alumni) || alumni.length === 0) {
      return alumni; // Return the original array if it is undefined, not an array or has length of 0
    }
    const sortedAlumni = [...alumni]; // Make a copy of the alumni array
    switch (sort) {
      case "Name A to Z":
        return sortedAlumni.sort((a, b) => a?.name.localeCompare(b?.name));
      case "Name Z to A":
        return sortedAlumni.sort((a, b) => b?.name.localeCompare(a?.name));
      case "Batch: Old to New":
        return sortedAlumni.sort((a, b) => a.graduation_year - b.graduation_year);
      case "Batch: New to Old":
        return sortedAlumni.sort((a, b) => b.graduation_year - a.graduation_year);
      default:
        return sortedAlumni;
    }
  };

  const sortedArray = filterBySort(alumniData);

  console.log(sortedArray);

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
