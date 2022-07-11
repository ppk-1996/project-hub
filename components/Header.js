import { useProfileContext } from "context/profileContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const { data: session } = useSession();
  const [profile,setProfile] = useProfileContext();
  useEffect(()=>{
    if(session){
      const fetchProfile=async()=>{
        //fetch profile from /api/profile
        const data = await fetch("/api/profile").then(res=>res.json());
        setProfile(data);
      }
      fetchProfile();
    }
  },[session])

  if (!session) {
    return <div>
      
      <div>
        <Link href="/signin">
          <a> Login </a>
        </Link>
      </div>
    </div>
  }
  if (session && profile) {
    return (
      <div className="header-login">
        <div className="usrInfo">
          <p className="usrname">{profile.profileName}</p>
          <button id="signout" onClick={signOut}>
            Sign Out
          </button>
      
        </div>
        <img className="usrImg" src={session?.user?.image} referrerPolicy="no-referrer" />
      </div>
    );
  }
}
export default Header