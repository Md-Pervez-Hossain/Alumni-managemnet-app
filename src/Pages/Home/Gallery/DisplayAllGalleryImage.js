import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const DisplayAllGalleryImage = ({ galleryImg, idx }) => {
  console.log(galleryImg);

  return (
    <div>
      <h2>Dispaly all gallery img</h2>
    </div>
  );
};

export default DisplayAllGalleryImage;
