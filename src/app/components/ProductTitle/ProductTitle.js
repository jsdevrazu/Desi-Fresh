import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ProductTitle = ({ title, isLeftIcon, isMark }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[16px] md:text-[24px] font-[700] text-textColor mb-4 lg:mb-10 relative">
          {title}
          {isMark && (
            <div
              className="px-2 rounded-md ml-2 absolute right-[-110px] top-[-10px] bg-primary text-white"
              variant="outline"
              size="md"
            >
              <p className="text-[12px]">Comming Soon</p>
            </div>
          )}
        </h1>

        {isLeftIcon ? (
          <div className="flex items-center gap-4">
            <h1 className="hidden text-sm text-textColor font-semibold md:flex items-center gap-4">
              See More
            </h1>
            <div className="flex">
              <AiOutlineArrowLeft
                color="gray"
                size={25}
                className="cursor-pointer"
              />
              <AiOutlineArrowRight
                color="black"
                size={25}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <h1 className="text-textColor text-[12px] font-[700] mb-3 md:mb-10 flex items-center gap-2">
            See More
            <AiOutlineArrowRight
              color="black"
              size={20}
              className="cursor-pointer"
            />
          </h1>
        )}
      </div>
    </>
  );
};

export default ProductTitle;
