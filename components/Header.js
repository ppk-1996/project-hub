import { useProfileContext } from "context/profileContext";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Header() {
  const { data: session } = useSession();
  const [profile, setProfile] = useProfileContext();

  useEffect(() => {
    if (session) {
      const fetchProfile = async () => {
        //fetch profile from /api/profile
        const data = await fetch("/api/profile").then((res) => res.json());
        setProfile(data);
      };
      fetchProfile();
    }
  }, [session]);

  return (
    <div className="bg-primary p-4 flex justify-end gap-x-4">
      <div className="w-52 mr-auto">
        <Link href="/">
          <a>
            <img src="/vercel.svg" width="100%" />
          </a>
        </Link>
      </div>
      <div className="hidden gap-x-1.5 md:flex">
        {!session ? (
          <Link href="/signin" className="block">
            <div className="btn">
              <a className="btn-front">Add Project</a>
              <div className="btn-back"></div>
            </div>
          </Link>
        ) : (
          <>
            <Link href="/dashboard">
              <div className="btn">
                <a className="btn-front">My Dashboard</a>
                <div className="btn-back"></div>
              </div>
            </Link>
            <Link href="/signin" className="block">
              <div className="btn">
                <a className="btn-front">Add Project</a>
                <div className="btn-back"></div>
              </div>
            </Link>
          </>
        )}
        <div>
          <div className="bg-slate-300 px-2">
            <label>
              <AiOutlineSearch className="inline-block" />
              <input
                type="search"
                className="m-2 bg-transparent outline-none placeholder:text-slate-500"
                placeholder="Search Projects"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <TbGridDots className="hidden md:block" />
        {!session ? (
          <Link href="/signin">
            <a> Sign In </a>
          </Link>
        ) : (
          <button onClick={signOut}>Sign Out</button>
        )}
      </div>
    </div>
  );
}
export default Header;
