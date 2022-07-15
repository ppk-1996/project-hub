import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname != "/signin";

  return (
    <>
      {showHeader && <Header />}
      <div className="p-4 bg-main min-h-[calc(100vh-40px)]">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
