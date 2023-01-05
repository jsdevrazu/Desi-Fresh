import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { COLORS } from "../../config/colors";

const Brand = () => {
  return (
    <section className="mt-[48px] mb-[48px] relative hidden md:block">
      <div className="app_container">
        <h1 className="text-2xl text-gray-800 font-semibold mb-2 lg:mb-10 relative">
          Popular Brand
        </h1>
        <div className="flex justify-between overflow-x-auto whitespace-nowrap gap-4 scrollbar-hide ">
          {[
            "assets/icons/image 549.png",
            "assets/icons/image 550.png",
            "assets/icons/image 551.png",
            "assets/icons/image 552.png",
            "assets/icons/image 553.png",
            "assets/icons/image 554.png",
          ].map((item, index) => (
            <img src={item} alt={item} key={index} />
          ))}
        </div>
        <div className="hidden lg:block absolute top-[65%] right-20 cursor-pointer">
          <AiOutlineArrowRight size={30} color={COLORS.primary} />
        </div>
        <div className="hidden lg:block absolute  top-[65%] left-20 cursor-pointer">
          <AiOutlineArrowLeft size={30} color={COLORS.primary} />
        </div>
      </div>
    </section>
  );
};

export default Brand;
