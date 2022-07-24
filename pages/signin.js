import { getProviders, signIn, useSession, useRouter } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "@/components/Input";

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/");
    }
  }, [session]);
  return (
    <div className="bg-main min-h-screen grid grid-cols-1 lg:grid-cols-[2fr_1fr] ">
      <div className="flex flex-col">
        <div className="pt-8 p-3 flex flex-col items-center">
          <div onClick={() => Router.back()}>
            <AiOutlineArrowLeft
              size={40}
              className="cursor-pointer text-primary font-bold absolute top-30 left-10 "
            />
          </div>
          <img src="/arduino_icon.svg" className="mb-8" />
          <div className="mb-6 text-3xl">SIGN IN TO PROJECT HUB</div>
          <div className=" max-w-sm">
            <Input label="Username or Email" />
            <Input label="Password" />
            <div className="text-primary text-sm font-bold">
              Forgot your password?
            </div>
            <div className="block bg-primarymute cursor-pointer w-fit bg-primary text-white tracking-wider px-4 py-2 mt-6 ml-auto rounded-full">
              SIGN IN
            </div>
          </div>

          <div className="mt-8 text-sm">
            Don't you have an account?{" "}
            <span className="text-primary font-bold">Create One</span>
          </div>
          <div className="mt-8 xl:px-16 flex items-center justify-center gap-x-8 w-full">
            <div className="bg-slate-400 flex-auto w-32 h-[1px]"></div>
            <div>Or Sign In with</div>
            <div className="bg-slate-400 flex-auto w-32 h-[1px]"></div>
          </div>
          <div className="flex mt-8 gap-x-6">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="bg-white p-2 px-6 rounded-full flex items-center gap-x-4 focus:ring"
                  onClick={() => signIn(provider.id)}
                >
                  {provider.name === "Google" ? <FcGoogle /> : <FaGithub />}
                  {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="inline-block mt-auto w-full">
          <div className="w-full h-1 mt-12 bg-[#CFD4D4]"></div>
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
        </div>
      </div>
      <div className="relative h-full hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 h-full"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1657700099453-cb814b39ce33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,
          }}
        ></div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
