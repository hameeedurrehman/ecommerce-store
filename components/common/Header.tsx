"use client";
import Checkout from "@components/checkout/Checkout";
import Image from "next/image";
import Link from "next/link";

const pages = ["Categories","Products", "About", "Contact", "Register"];
const settings = ["Profile", "Dashboard", "Logout"];

function Header() {
  return (
    <div className="bg-primary py-5 text-white">
      <div className="flex justify-center space-x-10 items-center container mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.jpg"
              width={80}
              height={80}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex">
        {pages.map((page) => (
          <Link href={`/${page.toLowerCase()}`} key={page} className="mr-4">
            {page}
          </Link>
        ))}
        </div>
        <Checkout />
      </div>
    </div>
  );
}
export default Header;
