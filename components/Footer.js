import { useRouter } from "next/router";
import React from "react";

function Footer() {
  const router = useRouter();

  return (
    <footer className=" bg-primary text-white py-2 text-center ">
      Copyright <span> &copy;</span> 2022
    </footer>
  );
}

export default Footer;
