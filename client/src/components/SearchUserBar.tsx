import { useEffect, useState } from "react";
import { RoundButton } from "../ui";
import { User as UserType } from "../types/User.types";
import AddUser from "./AddUser";

type SearchUserProps = {
  userList: UserType[];
  setUserList: (newList: UserType[]) => void;
};

const SearchUserBar = (props: SearchUserProps) => {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    // const newList = props.userList.filter((item) => {
    //   return item.name.includes(user);
    // });
    // props.setUserList(newList);
  }, [user, props]);

  const toggleAddUserForm = () => {
    const modalBox = document.getElementById("add-user-form");
    if (modalBox?.classList.contains("hidden")) {
      modalBox.classList.remove("hidden");
      modalBox.classList.add("flex");
    } else {
      modalBox?.classList.add("hidden");
      modalBox?.classList.remove("flex");
    }
  };


  return (
    <>
      <AddUser toggleForm={toggleAddUserForm} />
      <div className="h-[60px] lg:h-[8%] my-2 lg:my-0 rounded-lg w-[100%] flex justify-around items-center bg-white">
        <input
          type="text"
          placeholder="search user ..."
          className="p-2 border rounded-full h-[40px] w-[80%] outline-none"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <RoundButton handleClick={toggleAddUserForm}>
          <div className="rounded-full h-[30px] w-[30px] flex justify-center items-center">
            +
          </div>
        </RoundButton>
      </div>
    </>
  );
};

export default SearchUserBar;
