import React from "react";
import PageTitle from "../../../share/page-title/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// import required modules
import { Pagination } from "swiper/modules";
import { cardAfter } from "./TestimonialCard.module.css";
import { testimonials } from "@/src/constant/testimonials";

const Testimonial = () => {
  return (
    <div className="mt-[70px]">
      <div className="contain">
        {" "}
        <PageTitle title={"Our Happy Guardian"} />
        <div className="mt-12 mb-28">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {" "}
                <div className="flex flex-col items-center">
                  <div className="relative w-36 h-36 border-2 border-[#01A2A6] p-4 rounded-full">
                    <img
                      className="w-full h-full rounded-full "
                      src={testimonial?.image}
                      alt=""
                    />
                    <FormatQuoteIcon className="absolute top-[110px] left-[55px] bg-[#01A2A6] rounded-full text-white " />
                  </div>
                  <div
                    className={`text-center mt-6 border-t-2 border-x-2 border-[#01A2A6] rounded-t-lg  ${cardAfter} relative after:left-[48%] after:-top-[11.5px]`}
                  >
                    <p className="mt-4 px-2">{testimonial?.description.slice(0,100)}..</p>
                    <h4 className="text-xl mt-3 ">{testimonial?.name}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
