import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleGalleryImage = () => {
  const singleImage = useLoaderData();
  console.log(singleImage);
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2>Single Gallery image</h2>
    </div>
  );
};

export default SingleGalleryImage;
