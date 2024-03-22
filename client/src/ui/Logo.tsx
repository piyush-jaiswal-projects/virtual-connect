import { LogoIcon } from "../assets/logo";

const Logo = () => {
  return (
    <a href="/" className="w-[100%] h-[100%] overflow-hidden">
      <div className="p-1 md:p-4 invert">
        <img src={LogoIcon} alt="" className="h-[50px] lg:h-auto w-[50px] lg:w-auto" />
      </div>
    </a>
  );
};

export default Logo;
