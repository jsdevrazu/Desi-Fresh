import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { COLORS } from "../../config/colors";

const BannerCard = ({ path, title, leftTitle, smText, price, color }) => {
  return (
    <>
      <div className="flex items-center gap-2 bg-white shadow-md w-[45%] ml-4 mb-4 rounded-md">
        <div className="px-4 py-2 w-[45%] flex justify-center items-center flex-col">
          <img src={path} alt="Desi" className="w-full h-full object-contain" />
          <h2 className="text-primary text-sm font-semibold text-center">
            {title}
          </h2>
        </div>
        <div
          className="px-2 py-2 rounded-md flex-col flex flex-1 justify-center items-center text-center h-full"
          style={{ backgroundColor: color }}
        >
          <h1 className="text-[18px] text-white">{leftTitle}</h1>
          <p className="text-white text-sm">{smText}</p>
          <span className="text-2xl text-white">{price}</span>
          <button className="text-sm p-2 bg-white flex items-center gap-2 text-primary rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
            Shop Now <AiOutlineArrowRight color={COLORS.primary} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerCard;
