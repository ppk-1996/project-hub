import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white text-white py-4 text-center md:flex items-center justify-center gap-8">
      <a>
        <Image src="/footerlogo.svg" width={135} height={100} />
      </a>
      <div className="md:hidden h-[0.5px] w-24 bg-primary mx-auto my-4"></div>
      <div className="hidden md:block w-[0.5px] h-24 bg-primary"></div>
      <div className="text-black">
        <span className="text-xs"> Powered by</span>
        <br />
        <span className="font-bold text-2xl">Frontend</span>
      </div>
    </footer>
  );
}

export default Footer;
