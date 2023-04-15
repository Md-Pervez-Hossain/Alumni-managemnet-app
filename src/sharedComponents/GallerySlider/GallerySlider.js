import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { GalleryData } from "../TestimonialSlider/TestimonialData";
const GallerySlider = () => {
  return (
    <div className="">
      <h2 className="text-4xl text-center">Gallery</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        slidesPerView={3}
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
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {GalleryData.map((info) => {
          return (
            <SwiperSlide key={info.id}>
              <section className="py-6 dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-1 mx-auto">
                  <div
                    className={` bg-cover bg-center bg-no-repeat h-80`}
                    style={{
                      backgroundImage: `url(${info.img})`,
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
