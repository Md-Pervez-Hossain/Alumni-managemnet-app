import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
const GallerySlider = ({ year }) => {
  const [yearWiseGalleryData, setYearWiseGalleryData] = useState([]);

  // /galleries/batch/:batchnumber
  //

  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleries/batch/${year}`)
      .then((res) => res.json())
      .then((data) => {
        setYearWiseGalleryData(data);
      });
  }, [year]);

  return (
    <div className="">
      <h2 className="text-4xl text-center">Gallery</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        {yearWiseGalleryData.map((info) => {
          return (
            <SwiperSlide key={info._id}>
              <section className="pt-6 dark:bg-gray-800">
                <div className="container flex flex-col justify-center  mx-auto">
                  <div
                    className={` bg-cover bg-center bg-no-repeat h-40 md:h-80`}
                    style={{
                      backgroundImage: `url(${info.image_url})`,
                    }}
                  ></div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
