import { useProfileContext } from "context/profileContext";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
    <div className="bg-primary flex justify-between items-center p-4">
      <div className="w-52">
        <Link href="/">
          <a>
            <img src="/vercel.svg" width="100%" />
          </a>
        </Link>
      </div>
      {!session ? (
        <Link href="/signin" className="block">
          <a className="btn">Add Project</a>
        </Link>
      ) : (
        <>
        <Link href="/dashboard">
          <a className="btn">My Dashboard</a>
        </Link>
        <Link href="/signin" className="block">
         <a className="btn">Add Project</a>
       </Link>
        </>
      )}
      <div>
        <label>
          Search
          <input
            type="search"
            className="m-2 border border-gray-500"
            placeholder="search projects"
          />
        </label>
      </div>
      {!session ? (
        <div>
          <Link href="/signin">
            <a className="link"> Login </a>
          </Link>
        </div>
      ) : (
        <div className="flex">
          <img
            src={session?.user?.image}
            referrerPolicy="no-referrer"
            width={35}
          />
          <button className="link" onClick={signOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );


}
export default Header;
