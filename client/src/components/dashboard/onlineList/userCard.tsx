import ProfileIcon from "../../../lib/images/profileIcon";

type UserCardProps = {
  uid: string;
  name: string;
  imgUrl: string;
  setActive: (name: string, uid: string, imgUrl: string) => void;
};

export default function UserCard({
  uid,
  name,
  imgUrl,
  setActive,
}: UserCardProps) {
  return (
    <div
      onClick={() => {
        setActive(name, uid, imgUrl);
      }}
      className="flex justify-start items-center border-b p-2 cursor-pointer hover:bg-gray-100"
    >
      <ProfileIcon uid={uid} imgUrl={imgUrl} />

      <div className="mx-4 text-lg">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
