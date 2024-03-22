import { ReactNode } from "react";
import { Arrow } from "../assets/icons";

const ExpandableTab = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const toggleExpand = () => {
    document.getElementById(title)?.classList.toggle("hidden");
    document.getElementById(`${title}-arrow-icon`)?.classList.toggle("rotate-180");
  };

  return (
    <div className="p-2 border-b-2 lg:w-[60%] h-auto">
      <div className="flex justify-between items-center">
        <h2 
          onClick={toggleExpand} className="text-[20px] cursor-pointer">{title}</h2>
        <img
          id={`${title}-arrow-icon`}
          onClick={toggleExpand}
          className="w-[15px] cursor-pointer"
          src={Arrow}
          alt=""
        />
      </div>
      <div id={title} className="mt-2 hidden">
        {children}
      </div>
    </div>
  );
};

export default ExpandableTab;
