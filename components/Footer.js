import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

function Footer() {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname === "/signin") {
    return (
      <>
        <div
          className="w-full h-1 mt-12"
          style={{ background: "#CFD4D4" }}
        ></div>
        <footer className="text-primary text-xs bg-white p-3 px-6  w-full text-center cursor-pointer">
          <div
            onClick={() => router.push("/")}
            className="float-left inline-block"
          >
            &copy; 2022 ProjectHub
          </div>
          <div className="inline-block ">Terms of service</div>
          <div className="inline-block ml-6">Privacy Policy</div>
          <div className="inline-block ml-6">Security</div>
          <div className="inline-block ml-6">Cookie Settings</div>
        </footer>
      </>
    );
  } else {
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
}

export default Footer;
