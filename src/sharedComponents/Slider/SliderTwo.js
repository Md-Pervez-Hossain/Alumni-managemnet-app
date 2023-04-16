import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import imag1 from "../../assets/sliderIMG01.jpg";
import imag2 from "../../assets/sliderIMG02.jpg";
import imag3 from "../../assets/sliderIMG04.jpg";

const SliderTwo = () => {
  return (
    <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
      <div>
        <div className="relative">
          <img
            src={imag1}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full  mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6  text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                    We Proude To Be Student Of Oxford
                  </h2>
                  <p className="max-w-xl mb-5 text-base text-white md:text-lg ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
                  </p>
                  <div>
                    <a href="/" aria-label="" className="bg-secondary px-4 py-2 ">
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      aria-label=""
                      className="bg-primary text-white ml-3 px-4 py-2 "
                    >
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src={imag2}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full  mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6   text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                    We Proude To Be Student Of Oxford
                  </h2>
                  <p className="max-w-xl mb-5 text-base text-white md:text-lg ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
                  </p>
                  <div>
                    <a href="/" aria-label="" className="bg-secondary px-4 py-2 ">
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      aria-label=""
                      className="bg-primary text-white ml-3 px-4 py-2 "
                    >
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src={imag3}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full  mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6   text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                    We Proude To Be Student Of Oxford
                  </h2>
                  <p className="max-w-xl mb-5 text-base text-white md:text-lg ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
                  </p>
                  <div>
                    <a href="/" aria-label="" className="bg-secondary px-4 py-2 ">
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      aria-label=""
                      className="bg-primary text-white ml-3 px-4 py-2 "
                    >
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default SliderTwo;
