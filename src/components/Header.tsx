import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center items-center">
        <span></span>
        <a href="/">
          <img
            className="imgLogo h-full max-w-[540px]"
            src="/imgs/logoHqWhite.webp"
            alt="logo"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
