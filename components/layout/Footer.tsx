"use client";
import Image from "next/image";
import Link from "next/link";

const pages = ["Products", "Register"];
function Footer() {
  return (
    <div className="bg-primary py-5 text-white">
      {/* <div className="flex justify-center space-x-10 items-center container mx-auto">
        <div>
          <Link href={"/"}>
            <Image src="/assets/logo.jpg" width={80} height={80} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col">
          {pages.map((page) => (
            <Link href={`/${page.toLowerCase()}`} key={page} className="mr-4">
              {page}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
