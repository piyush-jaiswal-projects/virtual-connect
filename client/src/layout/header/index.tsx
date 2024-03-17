import React from "react";
import { Logo } from "../../assets/logo";
import { getCookie, logoutUser } from "../../utils";

export default function Header() {
  const isUserLoggdIn: string | null = getCookie("isUserLoggedIn")
  const userName = getCookie("name");

  return (
    <div
      className="custom-shado border-b overflow-hidden p-2 px-4 md:h-[60px] w-[100vw] md:flex 
    justify-between items-center"
    >
      <div>
        <a href="/">
          <img src={Logo} alt="VIRTUAL CONNECT" width={300} height={40} />
        </a>
      </div>

      <div className="flex justify-between border-t-2 md:border-t-0">
        <a
          className="text-[1.2rem] mx-2 hover:text-gray-500 md:border text-center md:p-2 md:rounded-lg md:bg-gray-100"
          href={
            isUserLoggdIn === "true" && userName !== null
              ? "/dashboard"
              : "/login"
          }
          rel="nonreferrer"
        >
          {isUserLoggdIn === "true" && userName !== null ? userName : "Login"}
        </a>

        {isUserLoggdIn === "true" && (
          <button
            className="text-[1.2rem] mx-2 hover:text-gray-500 "
            onClick={() => {
              logoutUser();
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}
