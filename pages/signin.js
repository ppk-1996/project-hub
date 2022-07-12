import { getProviders, signIn, useSession } from "next-auth/react";

export default function SignIn({ providers }) {
const {data:session} = useSession()

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="btn" onClick={() => signIn(provider.id)}>
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