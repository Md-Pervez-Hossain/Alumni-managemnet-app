import { useEffect, useState } from "react";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const DirectoryDetails = () => {
  const [allAlumni, setAllAlumni] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
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
      setPrevious(previous - 6);
      setNext(next - 6);
    }
  };

  const handleNext = () => {
    console.log("next clicked");
    setPrevious(previous + 6);
    setNext(next + 6);
  };
  return (
    <div className="w-9/12 mx-auto my-24">
      <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-10 bg-slate-200 bg-opacity-50 p-4 rounded-lg">
        <div className="mb-10">
          <h5 className="mb-6 md:text-5xl text-3xl font-extrabold leading-none text-primary text-justify">
            Alumni
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            deserunt optio aspernatur, blanditiis officiis vero inventore
            mollitia, necessitatibus est, quidem voluptate iure tempore fuga
            recusandae cum molestias quasi eum ad! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est voluptatem obcaecati deleniti
            fugiat, commodi ducimus. Hic ipsum, et, molestias temporibus fugiat
            tempore, recusandae aliquid iure sint nobis distinctio quos
            suscipit.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="max-w-xl  mb-10 lg:w-1/4">
            <div>
              <h5 className="mb-2 text-md font-extrabold leading-none text-primary">
                Day 1
              </h5>
              <h1 className="mb-6 text-2xl font-extrabold leading-none text-primary">
                Saptember 5
              </h1>
              <hr className="border-[1px] border-secondary w-3/4 mb-8" />
            </div>
            <div>
              <h5 className="mb-2 text-md font-extrabold leading-none text-primary">
                Day 2
              </h5>
              <h1 className="mb-6 text-2xl font-extrabold leading-none text-primary">
                Saptember 6
              </h1>
              <hr className="border-[1px] border-secondary w-3/4 mb-8" />
            </div>
            <div>
              <h5 className="mb-2 text-md font-extrabold leading-none text-primary">
                Day 3
              </h5>
              <h1 className="mb-6 text-2xl font-extrabold leading-none text-primary">
                Saptember 8
              </h1>
              <hr className="border-[1px] border-secondary w-3/4" />
            </div>
          </div>
          <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:w-3/4 ">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  lg:max-w-full">
              {allAlumni.slice(previous, next).map((singleAlumni) => (
                <AlumniBatchDataCard
                  key={singleAlumni._id}
                  singleAlumni={singleAlumni}
                />
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
        </div>
      </div>
    </div>
  );
};
