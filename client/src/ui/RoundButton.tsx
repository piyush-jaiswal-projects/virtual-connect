import { ReactNode } from "react";

const RoundButton = ({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      title="Add user"
      onClick={handleClick}
      className="rounded-full p-0 text-[25px] bg-black hover:bg-white border-0 hover:border-2 w-[40px] text-white hover:text-black h-[40px] outline-none flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default RoundButton;
