import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session, status } = useSession();
  if (status == "loading") {
    return <div> Loading...</div>
  }
  return <>
    <button className="btn-primary px-4 py-2">add project</button>
  </>
  if (!session) {
    return <div>
      
      <div>
        <Link href="/signin">
          <a> Login </a>
        </Link>
      </div>
    </div>
  }
  if (session) {
    return (
      <div className="header-login">
        <div className="usrInfo">
          <p className="usrname">{session?.user?.name}</p>
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