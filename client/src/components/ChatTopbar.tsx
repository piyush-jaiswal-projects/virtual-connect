import ProfileIcon from "../ui/images/profileIcon";

export default function ChatTopbar(props: { name: string; }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div className="flex justify-start items-center">
        <ProfileIcon uid="2" />
        <h2 className="mx-2">{props.name}</h2>
      </div>

      <div className="flex justify-center items-center">
      </div>
    </div>
  );
}
