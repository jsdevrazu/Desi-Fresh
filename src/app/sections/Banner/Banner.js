import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { COLORS } from "../../config/colors";
// Import Swiper React components
import { Autoplay, Scrollbar, A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={3}
      modules={[Autoplay, Scrollbar, A11y, Pagination]}
      pagination={true}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <SwiperSlide key={index}>
          <section
            key={index}
            className="bg-[#F1E8DD] h-48 md:h-[480px] mt-4 md:mt-10 relative mx-4 rounded-md md:mx-0 md:rounded-none"
          >
            <div className="app_container flex justify-between items-center h-full">
              {/* Hero Content */}
              <div className="max-w-[200px] md:max-w-[700px]">
                <h1 className="text-[16px] leading-6 lg:text-[56px] md:leading-[70px] font-bold text-[#3A3A3A]">
                  We Sell Only <span className="text-primary">Authentic, </span>
                  <span className="text-secondary">
                    High Quality{" "}
                    <span className="text-bannerText">Multicultural </span>
                  </span>
                  Asian Groceries.
                </h1>
                <p className="hidden md:block text-2xl font-semibold mt-4 text-[#3A3A3A]">
                  We care for your food and health
                </p>
                <button className="px-4 py-2 bg-primary flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                  Shop Now <AiOutlineArrowRight color="white" />
                </button>
              </div>
              {/* Hero Image */}
              <div className="absolute bottom-14 right-4 md:right-0 md:bottom-0">
                <img
                  src="assets/banner.png"
                  alt="Desi"
                  className="w-48 md:w-full md:h-96 object-cover"
                />
                <img
                  src="assets/desimark.png"
                  alt="Desi"
                  className="absolute bottom-8 right-12 md:right-48 w-10 h-10 md:w-[134px] md:h-[134px] object-cover"
                />
              </div>
            </div>
            {/* Left Icon */}
            <div className="hidden lg:block absolute top-[50%] right-20 cursor-pointer">
              <AiOutlineArrowRight size={30} color={COLORS.primary} />
            </div>
            <div className="hidden lg:block absolute top-[50%] left-20 cursor-pointer">
              <AiOutlineArrowLeft size={30} color={COLORS.primary} />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
