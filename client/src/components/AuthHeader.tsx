import { Logo } from "../ui"

const AuthHeader = () => {
    return (
        <div
        className="border-b overflow-hidden p-2 px-4 md:h-[60px] w-[100vw] flex 
      justify-between items-center bg-white"
      >
        <div className="invert overflow-hidden flex justify-start items-center">
          <div className="lg:w-[70px]">
            <Logo />
          </div>
          <h1 className="text-white text-2xl hidden lg:block">Virtual Connect</h1>
        </div>
      </div>
    )
}

export default AuthHeader