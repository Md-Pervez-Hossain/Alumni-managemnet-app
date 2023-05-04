import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useGetBatchWiseGalleryQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";
const GallerySlider = ({ year }) => {
  //load data using redux

  const { data, isLoading, isError, error } = useGetBatchWiseGalleryQuery(year);

  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        {" "}
        {data.map((info) => {
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
      </>
    );
  }

  return (
    <div className="">
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
        <>{content}</>
      </Swiper>
    </div>
  );
};

export default GallerySlider;
