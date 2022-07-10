import { useRouter } from 'next/router'
import { getProviders, useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

const SignIn = ({ providers }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session) {
            return () => {
                router.push('/');
            }
        }
    }, [session])
    if (status == "loading") {
        return <div> Loading...</div>
    }
    return (
        <div>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
};
export default SignIn;

export async function getServerSideProps(context) {
    return { props: { providers: await getProviders() } };
}