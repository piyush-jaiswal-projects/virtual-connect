import { AttachFileIcon, UserIcon, VideoCallIcon } from "../../../assets/icons";
import FeatureIcon from "../../../lib/images/featureIcon";
import ProfileIcon from "../../../lib/images/profileIcon";

export default function Header(props: { name: string; }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div className="flex justify-start items-center">
        <ProfileIcon uid="2" />
        <h2 className="mx-2">{props.name}</h2>
      </div>

      <div className="flex justify-center items-center">
        {/* <FeatureIcon altText="File" imgUri={AttachFileIcon} />
        <FeatureIcon altText="Video Call" imgUri={VideoCallIcon} /> */}
      </div>
    </div>
  );
}
