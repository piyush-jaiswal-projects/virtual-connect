import { useParams } from "react-router-dom";
import {
  Footer,
  ProfileInfo,
  ProfileSettings,
  VerticalBar,
} from "../components";
import { getCookie } from "../utils";

const Profile = () => {
  const { userId } = useParams();
  const name = getCookie("name");
  const email = getCookie("email");

  return (
    <div className="h-auto lg:h-[100vh] lg:overflow-hidden">
      <div className="bg-gray-300 lg:h-[95vh] lg:flex justify-around items-center">
        <VerticalBar
          uid={userId === undefined ? "" : userId}
          name={name === null ? "" : name}
        />
        <div className="p-2 w-[95%] h-[95%] mx-auto lg:mx-0 lg:flex lg:justify-between items-center">
          <ProfileInfo
            uid={userId === undefined ? "" : userId}
            name={name === null ? "" : name}
            email={email === null ? "" : email}
          />
          <ProfileSettings uid={userId === undefined ? "" : userId} />
        </div>
      </div>
          <div className="hidden lg:block">
              <Footer />
      </div>
    </div>
  );
};

export default Profile;
