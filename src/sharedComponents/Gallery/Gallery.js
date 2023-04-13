import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryCategory, setGalleryCategory] = useState([]);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleryCategories`)
      .then((res) => res.json())
      .then((data) => {
        setGalleryCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleries`)
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
      });
  }, []);

  if (!galleryCategory) {
    return <progress className="progress w-56"></progress>;
  }

  if (!galleryData) {
    return <progress className="progress w-56"></progress>;
  }
  const handleButtonClick = (id) => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleries/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
      });
  };
  const handleAllButtonClick = () => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleries`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
      });
  };

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
          {galleryCategory.map((galcat) => (
            <button
              onClick={() => {
                handleButtonClick(galcat._id);
              }}
              className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-gray-300 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
            >
              {galcat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {galleryData.slice(0, 6).map((img) => (
            <div
              loading="lazy"
              className={`h-80 bg-primary bg-cover`}
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
