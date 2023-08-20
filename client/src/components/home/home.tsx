import React from "react";
import { Hero3 } from "../../images";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-between items-center w-[90vw] min-h-[88vh] mx-auto">
      <section className="w-[60%] flex justify-start flex-col translate-up">
        <h1 className="text-[4rem] leading-[0.9] font-semibold">
          Connect virtually with your friends and colleagues.
        </h1>

        <br />

        <p className="text-gray-400 text-[1.5rem]">
          Connecting Moments, Instantly: Your Vision, Our Transmission
        </p>

        <br />

        <div className="flex justify-start items-center">
          <button className="bg-[black] border hover:bg-[#ffffff] hover:text-black h-[50px] w-[200px] rounded-lg mr-5 p-2 text-white">
            Start Meeting
          </button>

          <div className="flex justify-center items-center h-[50px] p-0">
            <input
              className="border border-black outline-none h-[50px] rounded-l-lg border-r-0 p-2"
              type="text"
              placeholder="Enter Meeting code"
            />
            <button className="bg-black h-[50px] text-white w-[50px] rounded-r-lg border border-black">
              Join
            </button>
          </div>
        </div>
      </section>

      <section className="w-[25%] flex justify-start flex-col translate-XY-custom">
        <img className="w-[300px] h-[300px]" src={Hero3} alt="" />
      </section>
    </div>
  );
}
