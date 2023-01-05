import { LIKECATEGORY } from "../../../data";
import { IconTitle, LikeCategoryCard } from "../../components";
import ProductTitle from "../../components/ProductTitle/ProductTitle";

const UpcomingCategory = () => {
  return (
    <>
      <section className="mt-[48px] mb-[48px]">
        <div className="app_container">
          <ProductTitle title="Upcoming Categories" />
          <div className="hidden lg:flex items-center gap-6">
            {LIKECATEGORY.slice(0, 4).map((item, index) => (
              <LikeCategoryCard {...item} key={index} />
            ))}
          </div>
          <div className="flex md:hidden items-center gap-6">
            {LIKECATEGORY.slice(0, 1).map((item, index) => (
              <LikeCategoryCard {...item} key={index} isBorder={true} />
            ))}
          </div>
          <div className="mt-20 hidden md:block">
            <div className="flex flex-wrap gap-10 md:gap-0 justify-around items-center">
              {[
                {
                  path: "assets/up/Authentic.png",
                  title: "100% Authentic",
                },
                {
                  path: "assets/up/Desi Famlily Card.png",
                  title: "Desi Famlily Card",
                },
                {
                  path: "assets/up/Fast Delivery.png",
                  title: "Desi Famlily Card",
                },
                {
                  path: "assets/up/Vector.png",
                  title: "Best Value Guarantee",
                },
              ].map((item, index) => (
                <IconTitle
                  icon={item.path}
                  isGray={true}
                  isFlex={true}
                  title={item.title}
                  key={index}
                  className="w-[43%] md:w-[25%]"
                />
              ))}
            </div>
          </div>
        </div>
        {/* SMall Banner */}
        <div className="mt-20 md:block hidden">
          <img
            src="assets/Small Banner.png"
            alt="Desi Family"
            className="h-[180px] w-full object-contain"
          />
        </div>
        <div className="app_container md:block hidden">
          <div className="flex justify-around items-center gap-10 flex-wrap mt-20">
            {[
              {
                path: "assets/up/Authenticity Check.png",
                title: "Authenticity Check",
              },
              {
                path: "assets/up/Return Policy.png",
                title: "Return Policy",
              },
              {
                path: "assets/up/Payment.png",
                title: "100% Secure Payment",
              },
              {
                path: "assets/up/Dedicated Customer Support.png",
                title: "Dedicated Customer Support",
              },
              {
                path: "assets/up/Discounts & Offers.png",
                title: "Discounts & Offers",
              },
            ].map((item, index) => (
              <IconTitle
                icon={item.path}
                isGray={true}
                isFlex={true}
                title={item.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingCategory;
