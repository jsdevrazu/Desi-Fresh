import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { COLORS } from "../../config/colors";

const Faq = ({ title, className }) => {
  return (
    <div className={`${className ? className : ""} flex justify-between items-center w-full border-b border-[#D9D9D9] pb-2 pt-2 md:hidden`}>
      <h3 className="text-[16px] font-[700] leading-normal">{title}</h3>
      <BiChevronDown color={COLORS.textColor} size={20} />
    </div>
  );
};

export default Faq;
