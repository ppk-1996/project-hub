import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname!="/signin"
  
  
  return (
    <div className="container">
     {showHeader && <Header/>}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
