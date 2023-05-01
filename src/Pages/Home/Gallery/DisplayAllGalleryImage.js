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
        <div>
          <p className="mt-2">Batch : {galleryImg.batchNumber}</p>
          <Link to={`/galleries/${galleryImg._id}`}>
            <div className="flex items-center gap-1 text-[12px]">
              <p>Details</p>
              <FaArrowRight></FaArrowRight>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DisplayAllGalleryImage;
