import React from "react";
import { BANNERDATA } from "../../../data";
import { BannerCard } from "../../components";

const DATA = [
  {
    id: 1,
    image: "assets/card4.png",
    title: "signup",
  },
  {
    id: 2,
    image: "assets/card1.png",
    title: "EARN",
  },
];
const DATA1 = [
  {
    id: 1,
    image: "assets/card2.png",
    title: "redeem",
  },
  {
    id: 2,
    image: "assets/card3.png",
    title: "donate",
  },
];

const Categories = () => {
  return (
    <section className="mt-10 hidden md:block ">
      <div className="app_container">
        <div className="flex gap-6">
          {/* Left Side Banner */}
          <div className="bg-gradient xl:w-[35%] 2xl:max-w-[771px]">
            <div className="flex items-center gap-4">
              <div className="w-full 2xl:w-[60%]">
                <img
                  className="w-full h-full"
                  src="assets/images/Go-Halal-Card 1.png"
                  alt="Desi"
                />
              </div>
              <div className="w-full 2xl:w-[40%]">
                <h1 className="text-[21px] text-primary font-[900] uppercase mb-2">
                  Desi family rewards
                </h1>
                <div className="border-t-4 border-b-4 pb-2 border-primary flex items-center justify-between">
                  <div className="w-[45%]">
                    <h1 className="xl:text-[24px] 2xl:text-[32px] text-primary font-[900] uppercase">
                      Earn
                    </h1>
                    <div className="bg-primary rounded-l-full px-4">
                      <h1 className="trns-text text-white uppercase">Points</h1>
                    </div>
                    <p className="text-[8px] mt-1 text-primary font-[700]">
                      Earn 1 point for every $ Spent
                    </p>
                  </div>
                  <h1 className="xl:text-[32px] text-[56px] font-bold text-primary mr-2 ml-2">
                    &
                  </h1>
                  <div className="w-[45%]">
                    <h1 className="xl:text-[24px] text-[32px] text-primary font-[900] uppercase">
                      Save
                    </h1>
                    <div className="bg-primary rounded-r-full px-2">
                      <h1 className="trns-text text-white">MONEY</h1>
                    </div>
                    <p className="text-[8px] mt-1 text-primary font-[700]">
                      {" "}
                      100% points euqals to 1 $ Spent
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {DATA.map((item) => (
                    <div className="flex flex-col items-center"  key={item.id}>
                      <img src={item.image} alt="Desi" className="xl:w-[30px] 2xl:w-[34px] xl:h-[30px] 2xl:h-[34px] object-cover" />
                      <h4 className="text-[9px] font-[700] text-primary uppercase mt-2">{item.title}</h4>
                    </div>
                  ))}
                  {DATA1.slice(0,1).map((item) => (
                    <div className="flex flex-col items-center"  key={item.id}>
                      <img src={item.image} alt="Desi" className="xl:w-[30px] 2xl:w-[34px] xl:h-[30px] 2xl:h-[34px] object-cover" />
                      <h4 className="text-[9px] font-[700] text-primary uppercase mt-2">{item.title}</h4>
                    </div>
                  ))}
                   <div className="w-[10px] h-[10px] mt-[-10px] bg-primary flex items-center justify-center text-white text-[6px] rounded-full">
                      +
                    </div>
                    {DATA1.slice(1,2).map((item) => (
                    <div className="flex flex-col items-center"  key={item.id}>
                      <img src={item.image} alt="Desi" className="xl:w-[30px] 2xl:w-[34px] xl:h-[30px] 2xl:h-[34px] object-cover" />
                      <h4 className="text-[9px] font-[700] text-primary uppercase mt-2">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="mt-4 text-primary font-semibold text-2xl mb-2">
              Together we <span className="text-[#fdbd12]">Save, </span> Share,
              Care and much more...
            </h1>
            <p className="text-[#444444]">
              You donate to{" "}
              <a
                className="text-[#4269F2] font-bold underline underline-offset-2"
                href="https://react-icons.github.io"
              >
                {" "}
                Desi Hands
              </a>
              , the chartity program for underprivileged kids every time you
              shop at Desi Fresh.
            </p>
          </div>
          {/* Right Side Banner */}
          <div className="xl:w-[60%] 2xl:max-w-[777px]">
            <div className="flex flex-wrap">
              {BANNERDATA.map((item, i) => (
                <BannerCard {...item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
