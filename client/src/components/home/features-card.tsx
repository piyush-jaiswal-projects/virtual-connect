import React from "react";

export default function FeaturesCard(props: {
  text: string;
  imageUrl: string;
}) {
  return (
    <div className="flex justify-between items-center flex-col w-[250px] h-[250px] p-2 ">
      <img
        className="w-[200px] h-[200px]"
        src={props.imageUrl}
        alt={props.text}
      ></img>
      <h3 className=" font-bold text-[20px]">{props.text}</h3>
    </div>
  );
}
