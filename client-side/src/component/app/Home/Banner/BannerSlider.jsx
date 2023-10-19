import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-6.jpg')] h-[600px] md:[500px] lg:h-[580px] xl:h-[680px]  bg-no-repeat w-full bg-cover">
            <div className="max-w-screen-xl mx-auto text-white pt-28 xl:pt-40 2xl:pt-48 px-8 md:px-20 lg:px-24 xl:px-32 2xl:px-0">
              <div>
                <div className=" w-full lg:w-2/4 text-white">
                  <h1 className="text-4xl md:text-5xl  mb-6">
                    Putting Children First. Preparing Children For Success In
                    Life
                  </h1>

                  <div className="flex gap-3">
                    <button className="bg-[#FE5D59] rounded-xl px-6 font-semibold py-1.5 text-white mt-3">
                      Apply Now
                    </button>
                    <button className="bg-transparent border-2 rounded-xl px-6 font-semibold py-1.5 text-white mt-3">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-1-1.jpg')] h-[600px] md:[500px] lg:h-[580px] xl:h-[680px]  bg-no-repeat w-full bg-cover">
            <div className="max-w-screen-xl mx-auto text-white pt-28 xl:pt-40 2xl:pt-48 px-8 md:px-20 lg:px-24 xl:px-32 2xl:px-0">
              <div>
                <div className=" w-full lg:w-2/4 text-white">
                  <h1 className="text-4xl md:text-5xl  mb-6">
                    Putting Children First. Preparing Children For Success In
                    Life
                  </h1>

                  <div className="flex gap-3">
                    <button className="bg-[#FE5D59] rounded-xl px-6 font-semibold py-1.5 text-white mt-3">
                      Apply Now
                    </button>
                    <button className="bg-transparent border-2 rounded-xl px-6 font-semibold py-1.5 text-white mt-3">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-6.jpg')] h-[600px] md:[500px] lg:h-[580px] xl:h-[680px]  bg-no-repeat w-full bg-cover">
            <div className="max-w-screen-xl mx-auto text-white pt-28 xl:pt-40 2xl:pt-48 px-8 md:px-20 lg:px-24 xl:px-32 2xl:px-0">
              <div>
                <div className=" w-full lg:w-2/4 text-white">
                  <h1 className="text-4xl md:text-5xl  mb-6">
                    Putting Children First. Preparing Children For Success In
                    Life
                  </h1>

                  <div className="flex gap-3">
                    <button className="bg-[#FE5D59] rounded-xl px-6 font-semibold py-1.5 text-white mt-3">
                      Apply Now
                    </button>
                    <button className="bg-transparent border-2 rounded-xl px-6 font-semibold py-1.5 text-white mt-3">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
