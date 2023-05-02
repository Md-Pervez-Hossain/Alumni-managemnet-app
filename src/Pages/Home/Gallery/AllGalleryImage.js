import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllGalleryImage from "./DisplayAllGalleryImage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import InnerPageHeader from "../../../sharedComponents/InnerPageHeader/InnerPageHeader";

const AllGalleryImage = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(18);
  const allGalleryImage = useLoaderData();
  console.log(allGalleryImage);

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 18);
      setPrevious(previous - 18);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 18);
    setPrevious(previous + 18);
  };
  return (
    <div>
      <div>
        <InnerPageHeader
          title={"Gallery"}
          img={
            "https://images.pexels.com/photos/7942549/pexels-photo-7942549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          description="welcome To Gallery Page"
        ></InnerPageHeader>
      </div>
      <div className="w-9/12 mx-auto my-16">
        <div className="grid lg:grid-cols-6 gap-5">
          <PhotoProvider>
            {allGalleryImage?.slice(previous, next).map((galleryImg, idx) => (
              <PhotoView src={galleryImg.image_url}>
                <img
                  src={galleryImg.image_url}
                  alt=""
                  className="h-32 w-full rounded-lg cursor-pointer"
                />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
        <div className="flex gap-2 justify-end my-8">
          <button onClick={() => handlePrevious()}>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button
            disabled={next > allGalleryImage?.length}
            onClick={() => handleNext()}
          >
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllGalleryImage;
