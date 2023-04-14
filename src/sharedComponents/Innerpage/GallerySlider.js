import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { GalleryData } from "./TestimonialData";
const GallerySlider = () => {
  return (
    <div className="">
      <h2 className="text-4xl text-center">Gallery</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={10}
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
                <div className="container flex flex-col justify-center p-2 mx-auto">
                  <div>
                    <img
                      className="object-cover w-full dark:bg-gray-500 aspect-square"
                      src={info.img}
                      alt=""
                    />
                  </div>
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
