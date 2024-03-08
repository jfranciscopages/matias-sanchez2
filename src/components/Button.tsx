import { TButton } from "../types";
import React from "react";

const Button = ({ background, textColor, text }: TButton) => {
  return (
    <button
      className={`md:text-xl lg:text-3xl rounded-[60px] ${background} ${textColor} px-[20px] py-[15px] md:px-[40px] md:py-[20px] w-full max-w-[532px] uppercase font-bold italic animate-fade-in transform transition duration-500 
      hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default Button;
