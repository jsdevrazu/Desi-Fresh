import React from "react";
import { LIKECATEGORY } from "../../../data";
import { LikeCategoryCard } from "../../components";
import ProductTitle from "../../components/ProductTitle/ProductTitle";

const LikeCategories = () => {
  return (
    <section className="lg:block mt-[48px] mb-[48px]">
      <div className="app_container">
        <ProductTitle title="Most Liked Categories" />
        <div className="hidden md:flex items-center gap-6 flex-wrap">
          {LIKECATEGORY.map((item, index) => (
            <LikeCategoryCard {...item} key={index} />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-6 flex-wrap">
          {LIKECATEGORY.slice(0,1).map((item, index) => (
            <LikeCategoryCard {...item} key={index} isBorder={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LikeCategories;
