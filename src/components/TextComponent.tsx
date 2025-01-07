import React from "react";

type prop = {
  text: string;
};
const TextComponent = ({ text }: prop) => {
  return (
    <div className="text-[#FD6F00] font-bold text-[20px] leading-normal">
      {text}
    </div>
  );
};

export default TextComponent;
