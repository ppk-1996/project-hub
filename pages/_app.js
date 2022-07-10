import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
