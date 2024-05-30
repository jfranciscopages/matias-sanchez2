import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center items-center">
        <Link href="/">
          <Image
            className="imgLogo h-full max-w-[540px]"
            src="/imgs/logoHqWhite.webp"
            width={500}
            height={500}
            alt="logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
