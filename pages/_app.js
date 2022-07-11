import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import { ProfileProvider } from "context/profileContext";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ProfileProvider>
        <Layout>

        <Component {...pageProps} />
        </Layout>
      </ProfileProvider>
    </SessionProvider>
  );
}

export default MyApp;
