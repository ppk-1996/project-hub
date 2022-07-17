import { useProfileContext } from "context/profileContext";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Header(props) {
  const { data: session } = useSession();
  const [profile, setProfile] = useProfileContext();
  const [isClicked, setIsClicked] = useState(false);
  console.log(props);

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
    <div className="bg-white p-4 flex justify-end gap-x-4">
      <div className="w-52 mr-auto">
        <Link href="/">
          <a>
            <Image src="/arduino.svg" width="500" height="100" />
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
          <div className="bg-main px-4 h-11 flex items-center gap-x-4 w-72">
            <AiOutlineSearch />
            <input
              type="search"
              className="bg-transparent outline-none placeholder:text-slate-500 leading-10 text-sm"
              placeholder="Search Projects"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around gap-2">
        <div
          onClick={props.handleClick}
          className=" cursor-pointer relative z-10"
        >
          <div className="rounded-full hover:bg-main hidden md:block text-primary p-2">
            <TbGridDots size={20} />
          </div>
          <div
            style={{ display: `${props.isClicked ? "block" : ""}` }}
            className={`hidden absolute right-0 top-0 pt-12 w-60`}
          >
            <ul className="block bg-white p-1 ">
              <li className="p-3 hover:bg-main">
                <a className="flex items-center gap-4">
                  <Image src="/arduinocloud.svg" width={40} height={30} />
                  <div>Arduino Cloud</div>
                </a>
              </li>
              <li className="p-3 hover:bg-main">
                <a className="flex items-center   gap-4">
                  <Image src="/iot.svg" width={40} height={30} />
                  <div>Iot Cloud</div>
                </a>
              </li>
              <li className="p-3 hover:bg-main">
                <a className="flex items-center   gap-4">
                  <Image src="/webeditor.svg" width={40} height={30} />
                  <div>Web Editor</div>
                </a>
              </li>
              <li className="p-3 hover:bg-main">
                <a className="flex items-center gap-4">
                  <Image src="/managerlinux.svg" width={40} height={30} />
                  <div>Manager for Linux</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {!session ? (
          <Link href="/signin">
            <a className="text-xs text-primary font-bold uppercase ">Sign In</a>
          </Link>
        ) : (
          <div
            className="text-xs text-primary font-bold uppercase cursor-pointer  "
            onClick={signOut}
          >
            Sign Out
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
