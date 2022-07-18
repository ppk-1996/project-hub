import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname != "/signin";

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked((pre) => !pre);
  };

  if (showHeader) {
    return (
      <div>
        <Header />
        <div className="p-4 py-8 bg-main min-h-[calc(100vh-10rem)]">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
  if (!showHeader) {
    return <>{children}</>;
  }
}

export default Layout;
