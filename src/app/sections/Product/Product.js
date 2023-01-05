import React from "react";
import { PRODUCTDATA } from "../../../data";
import { ProductCard } from "../../components";
import ProductTitle from "../../components/ProductTitle/ProductTitle";

const Product = ({ recommended, bestSelling }) => {
  return (
    <section className="pt-8 mb-[48px] bg-[#c7dbcf30] md:bg-transparent">
      <div className="app_container">
        <ProductTitle title={recommended ? "Recommended Products" : "Discount & Offers"} />
        {/* All Product Render here */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 scrollbar-hide">
          {PRODUCTDATA.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
        {/* New Products */}
        <div className="mt-[48px]">
          <ProductTitle title={bestSelling ? "Best Selling Products" : "New Products"} />
          <div className="flex overflow-x-auto whitespace-nowrap gap-4 scrollbar-hide">
          {PRODUCTDATA.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Product;
