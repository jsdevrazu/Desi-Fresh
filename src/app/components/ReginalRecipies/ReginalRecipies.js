import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ReginalRecipesCard = ({ path, bgPath }) => {
  return (
    <>
      <div className="rounded-lg relative md:max-w-[48%] xl:w-[32%] mb-6">
        <img
          src={bgPath}
          alt="Desi"
          className="rounded-lg"
        />
        <div className="bg-[#FDBD12] absolute top-0 h-full w-48 rounded-xl rounded-r-[40%] flex justify-center items-center flex-col">
          <img
            src={path}
            alt="Desi"
            className="rounded-lg"
          />
          <button className="px-2 py-2 bg-primary flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
            Shop Now <AiOutlineArrowRight color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ReginalRecipesCard;
