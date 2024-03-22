import { Logo } from "../ui";
import AppOptions from "./AppOptions";

const VerticalBar = (props: { uid: string; name: string }) => {
  if (props.uid === "nullId" || props.name === "null")
    window.location.replace("/login");

  return (
    <div className="lg:left-0 lg:w-[5%] flex lg:flex-col justify-around lg:justify-between items-center lg:pt-2 lg:pb-4 bg-black lg:h-[100%]">
      <Logo />
      <div className="flex mx-2 lg:mx-0 lg:flex-col justify-center items-center">
        <AppOptions uid={props.uid} name={props.name} />
      </div>
    </div>
  );
};

export default VerticalBar;
