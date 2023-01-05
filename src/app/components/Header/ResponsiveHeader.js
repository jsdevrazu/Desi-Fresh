import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { SMDATA } from "../../../data";
import { COLORS } from "../../config/colors";

const ResponsiveHeader = () => {
  return (
    <>
      <div className="md:hidden shadow-md md:shadow-none  md:px-0 px-4 pt-4 md:pt-0 flex items-center gap-2 pb-2">
        <img src="/assets/logo.svg" alt="Desi" className="w-16 h-16" />
       <div className="flex items-center justify-between flex-1">
       <div>
          <h2 className="text-[20px] text-textColor font-semibold">HEY</h2>
          <p className="text-[16px] text-textColor">Razu Islam</p>
        </div>
        <div className="flex items-center gap-4">
          <BsSearch color={COLORS.textColor} size={20} />
          <CgProfile color={COLORS.textColor} size={20} />
        </div>
       </div>
      </div>
      {/* Bottom Header */}
      <div className="px-4 md:hidden mt-6 flex items-center gap-4 justify-center">
        <img src="assets/shoping.png" alt="Desi" className="w-4 h-4 object-cover" />
        <p className="font-[700] text-textColor text-[14px]">Free Shipping from 49€</p>
      </div>
    </>
  );
};

export default ResponsiveHeader;
