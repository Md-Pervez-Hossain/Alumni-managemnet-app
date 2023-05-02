import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisplayAllGalleryImage = ({ galleryImg }) => {
  return (
    <div>
      <section>
        <div
          style={{
            backgroundImage: `url(${galleryImg.image_url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "200px",
          }}
          className="rounded-lg"
        ></div>
      </section>
    </div>
  );
};

export default DisplayAllGalleryImage;
