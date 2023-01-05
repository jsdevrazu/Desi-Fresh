import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RECOMANDEDCATEGORIESDATA } from "../../../data";
import { IconTitle } from "../../components";

const RecommendedCategory = () => {
  return (
    <section className="mt-14 py-6 hidden md:block ">
      <div className="app_container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-gray-800 font-semibold mb-10">
            Recommended Categories
          </h1>
          <h1 className="text-sm text-gray-800 font-semibold mb-10 flex items-center gap-4">
            See More
            <AiOutlineArrowRight
              color="black"
              size={25}
              className="cursor-pointer"
            />
          </h1>
        </div>
        <div className="px-20 flex items-center gap-10">
          {RECOMANDEDCATEGORIESDATA.map((item, index) => (
            <IconTitle
              icon={item.path}
              isGray={true}
              isFlex={true}
              title={item.title}
              key={index}
              isCircle={true}
              isActive={item.isActve}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCategory;
