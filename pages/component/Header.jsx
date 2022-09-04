import Image from "next/image";
import Link from "next/link";
import React from "react";
import shikoIcon from "../static/shikoIcon.png"

function Header() {

  return (
    <header className="sticky top-0 z-30 flex-1 w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/" style={{ width: "40%" }}>
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              alt="Shikoshiko"
              src={shikoIcon}
              objectFit="contain"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <span >SHIKOSHIKOSOFT OFFICAL WEBSITE</span>
        <span >twiter</span>
      </div>
      <div className="flex-1 items-center justify-center space-x-8 md:flex mt-4">
        <Link href="./blog">
          <a className="headerLink">Blog</a>
        </Link>
        <Link href=".">
          <a className="headerLink">Staff</a>
        </Link>
        <Link href=".">
          <a className="headerLink">Product</a>
        </Link>
        <Link href=".">
          <a className="headerLink">Contact</a>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <Link href="/checkout">
          <div className="relative cursor-pointer">
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;