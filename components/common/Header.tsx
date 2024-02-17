"use client";
import Checkout from "@components/checkout/Checkout";
import Link from "next/link";

const pages = ["Products"];
const settings = ["Profile", "Dashboard", "Logout"];

function Header() {
  return (
    <div className="bg-primary py-5">
      <div className="flex justify-between container mx-auto">
        {pages.map((page) => (
          <Link href={`/${page.toLowerCase()}`} key={page} className="mr-4">
            {page}
          </Link>
        ))}
        <Checkout />
      </div>
    </div>
  );
}
export default Header;
