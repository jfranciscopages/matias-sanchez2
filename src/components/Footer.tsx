import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="flex my-4 flex-col justify-between w-full h-full max-w-[1350px] mx-auto">
      {/* <div className="w-full flex justify-center items-center px-4 md:px-10 lg:px-20">
        <div className="w-full bg-white h-[1px]"></div>
      </div> */}
      <div className="flex flex-col w-full h-full justify-center items-center md:flex-row md:items-center md:justify-center px-8 my-10 md:my-0 md:h-[134px]">
        <Image
          src="/imgs/logoHqWhite.webp"
          className="imgLogo h-full mt-4 max-w-[300px] md:max-w-[400px] 2xl:max-w-[400px]"
          width={1000}
          height={1000}
          alt="logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
