import React from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { TfiArrowUp } from "react-icons/tfi";
import { COLORS } from "../../config/colors";

const ChatWithAdmin = () => {
  return (
    <div className="fixed z-[1000] right-6 bottom-20 md:bottom-10 md:right-10">
      <div className="hidden md:flex justify-center items-center mb-10 cursor-pointer">
      <TfiArrowUp size={25} color={COLORS.primary} />
      </div>
      <div className="bg-primary w-[36px] h-[36px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center">
        <BsFillChatSquareTextFill color={COLORS.white} size={20} />
      </div>
    </div>
  );
};

export default ChatWithAdmin;
