import React from "react";
import { Logo } from "../../assets/logo";
import { getCookie, logoutUser } from "../../utils";

export default function Header() {
  const isUserLoggdIn: string | null = getCookie("isUserLoggedIn")
  const userName = getCookie("name");

  return (
    <div
      className="custom-shadow overflow-hidden p-2 px-4 h-[60px] w-[100vw] flex 
    justify-between items-center"
    >
      <div>
        <a href="/">
          <img src={Logo} alt="VIRTUAL CONNECT" width={300} height={40} />
        </a>
      </div>

      <div>
      <a
        className="text-[1.2rem] mx-2 hover:text-gray-500 border p-2 rounded-lg bg-gray-100"
        href={
          (isUserLoggdIn === "true" && userName !== null) ? "/dashboard" : "/login"
        }
        rel="nonreferrer"
      >
        {(isUserLoggdIn === "true" && userName !== null) ? userName : "Login"}
      </a>

      {(isUserLoggdIn === "true") && <button
          className="text-[1.2rem] mx-2 hover:text-gray-500"
          onClick={() => {
            logoutUser()
          }}
      >
        Log Out
      </button>}
      </div>
    </div>
  );
}
