import React from "react";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import TogetherCard from "../../components/TogetherCard/TogetherCard";

const Together = () => {
  return (
    <section className="lg:block mt-[48px] mb-[48px]">
      <div className="app_container">
        <ProductTitle title="Together we change Lives" />
        <div className="md:flex items-center justify-between flex-wrap">
          <TogetherCard
            path="assets/images/Rectangle 1512.png"
            bigTitle="We check"
            bigTitleBottom="every item"
            smTitle="For"
            smTitleBottom="Quality,sadety & health"
            show={true}
            className="ml-0"
          />
          <TogetherCard
            path="assets/Picture.png"
            bigTitle="think"
            bigTitleBottom="green"
            smTitle="and"
            smTitleBottom="Save the world"
            isBg={true}
            className="hidden md:block"
          />
          <TogetherCard
            path="assets/images/Rectangle 800.png"
            bigTitle="desi"
            bigTitleBottom="hands"
            smTitle="we share with"
            smTitleBottom="underprivileged kids"
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Together;
