import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Router from "next/router";
import Input from "@/components/Input";
import Link from "next/link";

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/");
    }
  }, [session]);

  return (
    
      <div className="bg-[#ECF1F1] absolute h-full w-full">
        {/*  */}
        <div className="flex justify-between">
          <div className="w-full">
            <header className="grid grid-cols-3 p-[36px]">
              <button className="icon-button col-span-1" aria-label="Go back">
                <img src="/back_button.svg" />
              </button>
              <div className="col-span-1 text-center">
                <button>
                  <img src="/arduino_icon.svg" />
                </button>
              </div>
            </header>

            <main className="flex flex-col items-center gap-4">
              <div className="w-80">
                <h1 className="text-2xl font-semibold text-center">
                  Sign in to Arduino
                </h1>
                <form>
                  <Input label="Username or Email" name="username" />
                  <Input label="Password" name="password" type="password" />
                </form>
                <div className="flex flex-col">
                  <Link href="/forgot-password">
                    <a className="text-primary hover:text-primarydark font-semibold self-start mb-2">
                      Forgot password?
                    </a>
                  </Link>
                  <button className="uppercase text-white bg-primary hover:bg-primarydark font-semibold rounded-full px-4 py-2 self-end mt-4">
                    Sign In
                  </button>
                </div>
              </div>
            </main>
          </div>
          <div className="bg-blue-500 lg:min-w-[432px] lg:h-screen flex-shrink"></div>
        </div>
      </div>
    
  );
}
export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
