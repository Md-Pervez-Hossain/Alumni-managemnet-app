import React, { useEffect, useState } from "react";
import {
  useGetGalleriesQuery,
  useGetGalleryCategoriesQuery,
} from "../../../features/Api/apiSlice";
import Loading from "../../../sharedComponents/Loading/Loading";
import ButtonSizeSkeletion from "../../../sharedComponents/Skeletion/ButtonSizeSkeletion";
import ImageSkeletion from "../../../sharedComponents/Skeletion/ImageSkeletion";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import { useDispatch } from "react-redux";

const Gallery = () => {
  // initially render the gallery category
  const {
    data: galleryCategory,
    isError: categoryIsError,
    isLoading: categoryIsLoading,
    error: categoryError,
  } = useGetGalleryCategoriesQuery();

  const {
    data: galleryData,
    isError: galleryDataIsError,
    isLoading: galleryDataIsLoading,
    error: galleryDataError,
  } = useGetGalleriesQuery();

  const [filteredGalleryData, setFilteredGalleryData] = useState("all");

  const handleButtonClick = (id) => {
    setFilteredGalleryData(galleryData.filter((item) => item.gallery_category_id === id));
  };

  const handleAllButtonClick = () => {
    setFilteredGalleryData(galleryData);
  };

  let CategoryNameContent;

  if (categoryIsLoading && !categoryIsError) {
    CategoryNameContent = <ButtonSizeSkeletion />;
  }
  if (!categoryIsLoading && categoryIsError) {
    CategoryNameContent = <ErrorAlert text={categoryError} />;
  }
  if (!categoryIsLoading && !categoryIsError && galleryCategory?.length === 0) {
    CategoryNameContent = <ErrorAlert text="No Category Find" />;
  }
  if (!categoryIsLoading && !categoryIsError && galleryCategory?.length > 0) {
    CategoryNameContent = (
      <>
        {galleryCategory.map((galleryCategory) => (
          <button
            key={galleryCategory._id}
            onClick={() => {
              handleButtonClick(galleryCategory._id);
            }}
            className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-gray-300 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
          >
            {galleryCategory.name}
          </button>
        ))}
      </>
    );
  }

  //
  let galleryDataContent;

  if (galleryDataIsLoading && !galleryDataIsError) {
    galleryDataContent = (
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-3 gap-x-5 mt-4">
        {" "}
        <ImageSkeletion />
        <ImageSkeletion />
        <ImageSkeletion />
      </div>
    );
  }
  if (!galleryDataIsLoading && galleryDataIsError) {
    galleryDataContent = <ErrorAlert text={categoryError} />;
  }
  if (!galleryDataIsLoading && !galleryDataIsError && galleryCategory?.length === 0) {
    galleryDataContent = <ErrorAlert text="No Images Find" />;
  }
  if (!galleryDataIsLoading && !galleryDataIsError && galleryCategory?.length > 0) {
    galleryDataContent = (
      <>
        {filteredGalleryData === "all" ? (
          <>
            {galleryData?.slice(0, 6).map((img) => (
              <div
                key={img._id}
                loading="lazy"
                className={`h-80 bg-accent bg-cover`}
                style={{
                  backgroundImage: `url(${img.image_url})`,
                }}
              ></div>
            ))}
          </>
        ) : (
          <>
            {filteredGalleryData?.slice(0, 6).map((img) => (
              <div
                key={img._id}
                loading="lazy"
                className={`h-80 bg-accent bg-cover`}
                style={{
                  backgroundImage: `url(${img.image_url})`,
                }}
              ></div>
            ))}
          </>
        )}
      </>
    );
  }

  return (
    <div className="mt-3  mx-auto relative">
      <div className="mt-10">
        <h2 className="text-2xl lg:text-2xl font-semibold my-3">Our Gallery</h2>

        <div>
          <button
            onClick={handleAllButtonClick}
            className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-gray-300 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
          >
            All{" "}
          </button>
          <>{CategoryNameContent}</>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {galleryDataContent}
          {/* {filteredGalleryData.length > 0 &&
            filteredGalleryData?.slice(0, 6).map((img) => (
              <div
                loading="lazy"
                className={`h-80 bg-accent bg-cover`}
                style={{
                  backgroundImage: `url(${img.image_url})`,
                }}
              ></div>
            ))}
          {filteredGalleryData.length === 0 && (
            <>
              <ImageSkeletion />
              <ImageSkeletion />
              <ImageSkeletion />
              <ImageSkeletion />
              <ImageSkeletion />
              <ImageSkeletion />
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
