import React, { useState } from "react";
import { IconTitle } from "../";
import {
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineStar,
} from "react-icons/ai";
import {  BsSearch, BsStarFill } from "react-icons/bs";
import {
  CATEGORIESDATA,
  HEADERBOTTOMDATA,
  HEADERBOTTOMDATA1,
  HEADERTOPDATA,
} from "../../../data";
import { ResponsiveHeader } from "../";
import SelectInput from "../Select/Select";

/*
@App Header
@components       
*/

const options = [
  { value: 'Demo', label: 'Demo1' },
  { value: 'Demo2', label: 'Demo2' },
  { value: 'Demo3', label: 'Demo3' }
]

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isActive, setIsActive] = useState(0);

  return (
    <header className="w-full">
      {/* Show Header Message in Top */}
      <ResponsiveHeader />
      {showHeader && (
        <div className="hidden justify-center w-full bg-[#3A3A3A] h-10 lg:flex">
          <div className={`flex justify-between w-[70%] items-center`}>
            {HEADERTOPDATA.map((item, i) => (
              <IconTitle key={i} icon={item.path} title={item.title} />
            ))}
            <AiOutlineClose
              onClick={() => setShowHeader(false)}
              size={25}
              color="white"
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
      {/* Header Green Bar  */}
      <div className="bg-primary w-full h-14 hidden lg:block">
        <div className="app_container">
          <div className="flex justify-between items-center w-full">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <IconTitle
                className="border-r-2 border-white pr-4"
                icon={"assets/icons/headerTop/2.png"}
                title="About"
              />
              <IconTitle
                className="border-r-2 border-white pr-4"
                icon={"assets/icons/headerTop/2.png"}
                title="Authenticity Check"
              />
              <div className="flex items-center gap-2 header">
                <img src="assets/icons/headerTop/3.png" alt="Hello" />
                <SelectInput defaultValue={{ value: 'deutschland', label: 'Bangladesh - Bangla' }} options={options} />
              </div>
            </div>
            {/* Middle */}
            <div className="flex items-center gap-4">
              <div className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
                <img src="/assets/icons/google.png" alt="tester" />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">Google Reviews</h1>
                <h3 className="flex gap-4">
                  <p className="flex items-center gap-2 text-white">
                    4.8 <BsStarFill color="#FDBD12" size={10} />
                    <BsStarFill color="#FDBD12" size={10} />
                    <BsStarFill color="#FDBD12" size={10} />
                    <BsStarFill color="#FDBD12" size={10} />
                    <AiOutlineStar color="#FDBD12" size={10} />
                  </p>
                  <p className="text-white font-semibold"> Rate us on google</p>
                </h3>
              </div>
            </div>
            {/* Right SIde */}
            <div className="flex items-center gap-4">
              <IconTitle
                className="border-r-2 border-white pr-4"
                icon={"assets/icons/home/Vector-4.png"}
                title="Desi Family"
              />
              <IconTitle
                className="border-r-2 border-white pr-4"
                icon={"assets/icons/home/Vector-4.png"}
                title="Desi Hand"
              />
              <img src="assets/icons/home/Vector-5.png" alt="Hello" />
            </div>
          </div>
          {/* Logo With Additional Information */}
        </div>
      </div>
      <div className="app_container mt-10 hidden lg:block">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-1 gap-6">
            {/* Logo */}
            <img src="/assets/logo.svg" alt="Desi" className="w-20 h-20" />
            <div className="w-full">
              {/* Search Bar */}
              <div className="flex">
                <div className="border border-whiteGray rounded-l-md px-4 py-1 flex justify-between items-center w-full">
                  <div className="relative">
                    <input
                      placeholder="I am searching for..."
                      className="border-none outline-none px-10 w-full"
                    />
                    <BsSearch
                      size={17}
                      className="absolute top-1"
                      color="gray"
                    />
                  </div>
                  <div className="flex items-center gap-2 border-l border-whiteGray pl-4">
                  <SelectInput defaultValue={{ value: 'all categories', label: 'All Categories' }} options={options} />
                  </div>
                </div>
                <button className="bg-primary text-white rounded-r-md px-4 py-2 font-bold">
                  <AiOutlineArrowRight />
                </button>
              </div>
              {/* Regional Info */}
              <div className="flex items-center mt-3">
                <h2 className="mr-3">
                  <b>Regional</b>:
                </h2>
                {[
                  "india",
                  "Pakistan",
                  "Bangladesh",
                  "Thailand",
                  "Myanmar",
                  "Srilanka",
                  "China",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="text-textColor mr-3 border-r-2 border-whiteGray pr-4 capitalize"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-4 ml-20 max-w-[495px]">
            {CATEGORIESDATA.map((item, i) => (
              <IconTitle
                className="border-r-2 border-white pr-4"
                icon={item.path}
                isGray={true}
                isFlex={true}
                title={item.title}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block app_container mt-10">
        <div className="flex items-center gap-8">
          {HEADERBOTTOMDATA.map((item, i) => (
            <IconTitle
              key={i}
              className={`cursor-pointer ${
                isActive === i && "border-b-2 border-primary pb-1"
              }`}
              icon={item.path}
              isGray={true}
              title={item.title}
              onClick={() => setIsActive(i)}
            />
          ))}
        </div>
      </div>
      <div className="app_container mt-10 hidden lg:block ">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 border-gray-600 border-r-2 pr-4">
            <h2 className="flex items-center gap-2">
              <img src="assets/icons/headerBottom/Categories.png" alt="Desi" />
              <SelectInput defaultValue={{ value: 'all categories', label: 'All Categories' }} options={options} />
            </h2>
          </div>
          {HEADERBOTTOMDATA1.map((item, i) => (
            <IconTitle
              key={i}
              className={`cursor-pointer`}
              icon={item.path}
              isGray={true}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
