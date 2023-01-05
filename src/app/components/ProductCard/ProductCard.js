import React from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCart, BsChevronDown, BsStarFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { COLORS } from "../../config/colors";

const ProductCard = ({
  image,
  new: newProduct,
  bio,
  tree,
  points,
  discount,
  name,
  subtitle,
  price,
  discountPrice,
  brand,
  isCart,
  outOfStock,
  isFav,
  onlyCart,
  saveAmount,
  qrCode,
}) => {
  return (
    <>
      <div className="relative bg-white px-2 mt-4 md:mt-0 shadow-md rounded-md w-[170px] lg:w-[300px] mb-6 md:mb-10">
        {/* Additional product Information */}
        <div className="px-2 absolute top-4 left-0">
          <div className="productRounded">
            <span className="text-white text-[10px] md:text-sm">{bio}</span>
          </div>
          <div className="productRounded">
            <span className="text-white text-[10px] md:text-sm">
              {newProduct}
            </span>
          </div>
          <div className="productRounded">
            <span className="text-white text-[10px] md:text-sm">{tree}</span>
          </div>
          <div className="h-6 w-6 md:w-10 md:h-10  rounded-full bg-secondary flex items-center justify-center mb-2">
            <span className="text-red text-[7px] w-full block text-center font-bold">
              +{points} <br />
              Points
            </span>
          </div>
          <div className="h-6 w-6 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center mb-2">
            <span className="text-red font-bold">{discount}</span>
          </div>
        </div>
        {/* Save Product Info */}
        {saveAmount && (
          <div className="hidden md:block  absolute top-[27%] right-2">
            <div className="bg-secondary px-2 py-1 flex items-center gap-3">
              <p className="text-[16px] font-[400] text-red">Save 25%</p>
              <AiOutlineInfoCircle color={COLORS.primary} size={15} />
            </div>
          </div>
        )}
        {qrCode && (
          <div className="absolute top-[38%] right-2">
            <img src="assets/qr.png" alt="Desi" className="w-[57px] h-[24px]" />
          </div>
        )}
        {/* Product Heart Right Side */}
        <div className="absolute top-4 right-2 cursor-pointer">
          {isFav ? (
            <AiFillHeart size={30} color={COLORS.primary} />
          ) : (
            <AiOutlineHeart size={30} color={COLORS.primary} />
          )}
        </div>
        <img
          src={image}
          alt="Desi"
          className="w-[278px] h-[170px] mt-6 object-contain"
        />
        {/* Product Info */}
        <div className="text-center mt-0 md:mt-20">
          <h3 className="text-textColor text-[16px] font-[700]">{name}</h3>
          <p className="text-[12px] md:text-[16px] font-[400] break-words">
            {subtitle}
          </p>
          <p>
            <span className="font-[800] text-[12px] md:text-[20px]">
              {price}
            </span>{" "}
            <del className="text-[#A6A6AA] text-[12px]">{discountPrice}</del>
          </p>
          <p className="text-textColor text-[16px] font-[400] hidden md:block">
            Brand: {brand}
          </p>
          <div className="hidden md:flex justify-center items-center gap-4 mt-2">
            <div className="flex items-center">
              <BsStarFill color={COLORS.secondary} size={20} />
              <BsStarFill color={COLORS.secondary} size={20} />
              <BsStarFill color={COLORS.secondary} size={20} />
              <BsStarFill color={COLORS.secondary} size={20} />
              <AiOutlineStar color={COLORS.secondary} size={20} />
            </div>
            <span className="text-[#A6A6AA] text-[16px] ml-[-4px]">
              (5 Reviews)
            </span>
          </div>
          <p className="hidden md:flex justify-center mt-2 font-semibold items-center gap-2">
            Others Variants
            <BsChevronDown color="dark" size={20} className="cursor-pointer" />
          </p>
          <div className="flex items-center justify-center mb-6">
            {isCart ? (
              <div className="md:flex items-center justify-center hidden">
                <button className="px-4 py-2 border border-prbg-primary flex items-center gap-2 text-prbg-primary rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                  <AiOutlineMinus size={20} color={COLORS.primary} />
                  <span>0</span>
                  <AiOutlinePlus size={20} color={COLORS.primary} />
                </button>
                <button className="px-4 ml-4 py-2 bg-primary hidden md:flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                  <BsCart size={25} color="white" />
                </button>
              </div>
            ) : outOfStock ? (
              <div className="hidden md:flex items-center justify-center">
                <button className="px-4 py-2 bg-whiteGray flex items-center gap-2 text-gray-900 font-semibold rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                  Out Of Stock{" "}
                  <IoMdNotificationsOutline color={COLORS.primary} />
                </button>
                <button className="p-2 ml-4 bg-primary hidden md:flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                  <img
                    src="assets/stock.png"
                    className="w-6 h-6 object-cover"
                    alt="Cool"
                  />
                </button>
              </div>
            ) : (
              <div className="md:flex hidden items-center justify-center">
                <button className="px-4 py-2 bg-primary flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                  Add to cart <BsCart color="white" />
                </button>
                {!onlyCart && (
                  <button className="px-4 py-2 ml-4 bg-primary hidden md:flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
                    <img
                      src="assets/cartmy.png"
                      className="w-full object-cover"
                      alt="Cool"
                    />
                  </button>
                )}
              </div>
            )}
            <button className="px-4 py-2 bg-primary flex md:hidden items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500 mt-4">
              Add to cart <BsCart color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
