import { AuthHeader } from "../components";

export enum Error {
  "Not Found!",
  "Network Error!",
  "Service Unavailable!",
  "Internal Server Error!",
  "Some Error Occurred!",
}

const ErrorPage = (props: { type: Error }) => {

  return (
    <>
      <div className="absolute z-50 w-[100%] h-[100%] text-center flex flex-col justify-start items-center">
              <AuthHeader />
              <h1 className="text-[10vw] font-mono font-bold my-4">{Error[props.type].toUpperCase()}</h1>
              <img src="" alt="" />
      </div>
    </>
  );
};

export default ErrorPage;
