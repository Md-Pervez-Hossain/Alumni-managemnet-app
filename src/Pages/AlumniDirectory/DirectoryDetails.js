import { useEffect, useState } from "react";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useGetAllAlumniQuery } from "../../features/Api/apiSlice";
import ButtonSizeSkeletion from "../../sharedComponents/Skeletion/ButtonSizeSkeletion";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import Loading from "../../sharedComponents/Loading/Loading";
import CardsWithAuthorSkeletion from "../../sharedComponents/Skeletion/CardsWithAuthorSkeletion";
import PersonCardSkeleton from "../../sharedComponents/Skeletion/PersonCardSkeletion";

export const DirectoryDetails = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(9);

  const {
    data: alumniData,
    isError: alumniDataIsError,
    isLoading: alumniDataIsLoading,
    error: alumniDataError,
  } = useGetAllAlumniQuery();

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
          {alumniData.slice(previous, next).map((singleAlumni) => (
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
