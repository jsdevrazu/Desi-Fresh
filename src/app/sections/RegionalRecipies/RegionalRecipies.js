import React from "react";
import { REGIONALRECEIPES } from "../../../data";
import { ReginalRecipesCard } from "../../components";
import ProductTitle from "../../components/ProductTitle/ProductTitle";

const RegionalRecipes = () => {
  return (
    <section className="lg:block mt-[48px] mb-[48px]">
      <div className="app_container">
        <ProductTitle title="Regional Recipies" isMark={true} />
        <div className="hidden md:flex items-center justify-between flex-wrap">
          {REGIONALRECEIPES.map((item, index) => (
            <ReginalRecipesCard key={index} {...item} />
          ))}
        </div>
        <div className="flex md:hidden items-center justify-between flex-wrap">
          {REGIONALRECEIPES.slice(0,1).map((item, index) => (
            <ReginalRecipesCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalRecipes;
