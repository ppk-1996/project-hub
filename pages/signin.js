import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
export default function SignIn({ providers }) {

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="btn-primary" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}