// import TextComponent from "@/components/TextComponent";
import React from "react";

const Oche = () => {
  return (
    <div className="px-6 py-5">
      <div className="flex justify-between ">
        <TextComponent text="Oche" />
        <div className="flex flex-row items-center gap-3">
          <TextComponent text="Oche" /> <TextComponent text="Oche" />
          <TextComponent text="Oche" /> <TextComponent text="Oche" />
        </div>
        <TextComponent text="Oche" />
      </div>
    </div>
  );
};

export default Oche;

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
