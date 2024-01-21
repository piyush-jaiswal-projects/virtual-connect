import React from "react";

export default function Footer() {
  return (
    <div className="absolute bottom-0 flex justify-center w-[100vw] bg-black text-white p-4">
      <p className="mx-1">
        Developed by{" "}
        <a
          className="text-blue-500"
          href="https://twitter.com/PiyushJ17317768"
          target="__blank"
        >
          Piyush Jaiswal
        </a>
      </p>
      |
      <p className="mx-1">
        <a
          className="text-blue-500"
          href="https://github.com/piyush-jaiswal-projects/virtual-connect"
          target="__blank"
        >
          Github
        </a>
      </p>
    </div>
  );
}
