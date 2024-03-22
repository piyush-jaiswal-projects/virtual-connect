import { LargeProfileIcon } from "../ui";

const ProfileInfo = ({
  uid,
  name,
  email,
}: {
  uid: string;
  name: string;
  email: string;
}) => {
  return (
    <div className="lg:w-[23%] h-[100%] bg-white rounded-lg m-1 p-4 flex flex-col justify-start items-center overflow-scroll">
      <LargeProfileIcon />
      <h1 className="text-[2rem] my-1">{name}</h1>
      <h1 className="text-[1rem]">{email}</h1>
    </div>
  );
};

export default ProfileInfo;
