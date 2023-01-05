import React from "react";
import { BiCategory, BiListUl } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { ImTicket } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { COLORS } from "../../config/colors";

const BottomNavigation = () => {
  return (
    <div className="md:hidden block fixed inset-x-0 bottom-0 z-[100] bg-white shadow py-4">
      <div className="flex items-center justify-between w-full px-10">
        <div className="flex justify-center items-center flex-col">
          <HiHome size={30} color={COLORS.primary} />
          <h3 className="text-[12px] font-[700] text-textColor">Home</h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BiCategory color="#A6A6AA" size={30} />
          <h3 className="text-[12px] font-[700] text-textColor">Categories</h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BsCart color="#A6A6AA" size={30} />
          <h3 className="text-[12px] font-[700] text-textColor">My Cart</h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BiListUl color="#A6A6AA" size={30} />
          <h3 className="text-[12px] font-[700] text-textColor">My Lists</h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <ImTicket color="#A6A6AA" size={30} />
          <h3 className="text-[12px] font-[700] text-textColor">Discounts</h3>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
