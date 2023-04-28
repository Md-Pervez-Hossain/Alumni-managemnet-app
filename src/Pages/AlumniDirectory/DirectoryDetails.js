import { useEffect, useState } from "react";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const DirectoryDetails = () => {
  const [allAlumni, setAllAlumni] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(9);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/alumni")
      .then((res) => res.json())
      .then((data) => {
        setAllAlumni(data);
      });
  }, []);

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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  lg:max-w-full">
        {allAlumni.slice(previous, next).map((singleAlumni) => (
          <AlumniBatchDataCard key={singleAlumni._id} singleAlumni={singleAlumni} />
        ))}
      </div>
      <div className="flex items-center justify-end gap-3 my-5">
        <button
          onClick={() => handlePrevious()}
          className="hover:text-secondary text-primary duration-500 ease-in-out"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next > allAlumni.length}
          onClick={() => handleNext()}
          className="hover:text-secondary text-primary duration-500 ease-in-out"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};
