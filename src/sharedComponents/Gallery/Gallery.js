import React, { useEffect, useState } from "react";
import {
  useGetGalleriesQuery,
  useGetGalleryCategoriesQuery,
} from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ButtonSizeSkeletion from "../Skeletion/ButtonSizeSkeletion";
import ImageSkeletion from "../Skeletion/ImageSkeletion";
import ErrorAlert from "../Skeletion/ErrorAlert";
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
    isError: dataIsError,
    isLoading: dataIsLoading,
    error: dataError,
  } = useGetGalleriesQuery();

  const [filteredGalleryData, setFilteredGalleryData] = useState([]);

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

  return (
    <div className="mt-3  mx-auto relative">
      <div className="mt-10">
        <h2 className="text-2xl lg:text-2xl font-semibold my-3">Our Gallery</h2>
        <Loading />

        <ImageSkeletion />
        <div>
          <button
            onClick={handleAllButtonClick}
            className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-gray-300 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
          >
            All{" "}
          </button>
          <button>{CategoryNameContent}</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {}

          {filteredGalleryData?.slice(0, 6).map((img) => (
            <div
              loading="lazy"
              className={`h-80 bg-accent bg-cover`}
              style={{
                backgroundImage: `url(${img.image_url})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
