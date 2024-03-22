import { useState } from "react";
import ExpandableTab from "../ui/ExpandableTab";
import { logoutUser } from "../utils";

const ProfileSettings = ({ uid }: { uid: string }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="lg:w-[75%] h-[100%] bg-white rounded-lg p-4 m-1">
      <h1 className="text-[20px]">Settings</h1>
      <div className="lg:ml-[80px]">
        <ExpandableTab title="Logout">
          <p>Logs you out of the app.</p>
          <button
            onClick={logoutUser}
            className="bg-black text-white rounded-lg w-auto px-4 h-[50px] my-2"
          >
            Logout
          </button>
        </ExpandableTab>

        <ExpandableTab title="Edit Profile">
          <p>Update your profile details.</p>
          <br />
          <input
            type="text"
            placeholder="Name"
            className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="bg-black text-white rounded-lg w-auto px-4 h-[50px] my-2">
            Update
          </button>
        </ExpandableTab>

        <ExpandableTab title="Reset Password">
          <p>Update your password.</p>
          <br />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-black text-white rounded-lg w-auto px-4 h-[50px] my-2">
            Update
          </button>
        </ExpandableTab>
      </div>
    </div>
  );
};

export default ProfileSettings;
