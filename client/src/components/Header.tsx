import { getCookie, logoutUser } from "../utils";
import { Logo } from "../ui";

export default function Header() {
  const isUserLoggdIn: string | null = getCookie("isUserLoggedIn");
  const userName = getCookie("name");

  return (
    <div
      className="border-b overflow-hidden p-2 px-4 md:h-[60px] w-[100vw] flex 
    justify-between items-center bg-white"
    >
      <div className="invert overflow-hidden flex justify-center items-center">
        <div className="lg:w-[70px]">
          <Logo />
        </div>
        <h1 className="text-white text-2xl hidden lg:block">Virtual Connect</h1>
      </div>

      <div className="flex justify-between ">
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
