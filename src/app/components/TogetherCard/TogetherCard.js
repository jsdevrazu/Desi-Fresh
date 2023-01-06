import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const TogetherCard = ({
  path,
  bigTitle,
  bigTitleBottom,
  smTitle,
  smTitleBottom,
  isBg,
  className
}) => {
  return (
    <>
      <div className={`relative md:w-[48%] md:mb-6 md:ml-0 xl:mb-0 xl:w-[32%] rounded-2xl ml-4 h-[300px] ${className}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-textColor  rounded-2xl bg-opacity-40 overflow-hidden"></div>
        <img src={path} className="rounded-2xl w-full h-full object-cover" alt="Desi" />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gray-900 ${
            isBg ? "opacity-10" : "opacity-50"
          } rounded-2xl`}
        ></div>
        <div className="absolute top-0 z-[100] flex justify-center items-center flex-col w-full h-full">
          <h1 className="home_content uppercase mb-[-8px]">{bigTitle}</h1>
          <h1 className="text-white text-2xl lg:text-6xl font-bold uppercase">
            {bigTitleBottom}
          </h1>
          <p className="text-xl text-white font-semibold uppercase text-center mt-3">
            {smTitle} <br />
            {smTitleBottom}
          </p>
          <button className="px-10 py-2 bg-primary flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
            Read More <AiOutlineArrowRight color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TogetherCard;
