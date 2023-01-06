import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { COLORS } from "../../config/colors";

const LikeCategoryCard = ({ color, title, path, isBorder }) => {
  return (
    <>
      <div className={`flex md:w-[48%] xl:w-[31%] 2xl:w-[23%] items-center justify-center text-center shadow-md rounded-[19px] h-48 ${isBorder ? `border-2 border-primary` : ""}`}>
        <div
          className="h-full px-6 py-4 rounded-l-2xl"
          style={{ backgroundColor: color }}
        >
          <h1 className="text-2xl leading-7 text-white uppercase w-full text-center max-w-[150px]">
            {title}
          </h1>
          <p className="text-white">Sale up to 20%</p>
          <button className="p-2 bg-white flex items-center gap-2 text-primary transition-all duration-300 hover:bg-green-500 mt-4 rounded-md mx-auto">
            Shop <AiOutlineArrowRight color={COLORS.primary} />
          </button>
        </div>
        <div>
          <img src={path} alt="Desi" />
        </div>
      </div>
    </>
  );
};

export default LikeCategoryCard;
