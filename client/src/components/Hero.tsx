import { Hero } from "../assets/images";
import { getCookie } from "../utils";

export default function Home() {

  const user = getCookie("name")

  return (
    <>
      <div className="flex flex-wrap justify-between items-center w-[90vw] min-h-[85vh] mx-auto">
        <div className="w-[100%] lg:w-[60%] flex justify-start flex-col lg:translate-y-[-150px] my-[50px] lg:my-0">
          <h1 className="text-center lg:text-left text-[2rem] lg:text-[4rem] leading-[0.9] font-semibold">
            Connect virtually with your friends and colleagues.
          </h1>

          <br />

          <p className="text-gray-400 text-center lg:text-left leading-[1] text-[1.5rem]">
            Connecting Moments, Instantly: Your Vision, Our Transmission
          </p>

          <br />

          <div className="flex justify-center lg:justify-start items-center">
            <a
              href={(user?.length === 0 || user === "null") ? "/signin" : "/dashboard"}
              className="bg-[black] border hover:bg-[#ffffff] hover:text-black 
              h-[50px] w-[200px] rounded-lg mr-5 p-2 text-white text-center text-[20px]"
            >
              Get Started
            </a>
          </div>
        </div>

        <div
          className="w-[100%] lg:w-[25%] flex justify-center lg:justify-start flex-col 
        lg:translate-x-[-100px] lg:translate-y-[80px]"
        >
          <img
            className="w-[300px] h-[300px] mx-auto"
            src={Hero}
            alt="Virtual Connect"
          />
        </div>
      </div>
    </>
  );
}
