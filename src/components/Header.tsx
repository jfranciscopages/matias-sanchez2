import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center items-center">
        <Link href="/">
          <Image
            src="/imgs/logoHQ.webp"
            width={1000}
            height={1000}
            className="w-full h-full max-w-[540px]"
            alt="logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
