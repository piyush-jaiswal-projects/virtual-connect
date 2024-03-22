import { useState } from "react";

const AddUser = ({
  toggleForm
}: {
  toggleForm: () => void;
}) => {
    const [mailId, setMailId] = useState<string>("");
    
    const addNewUser = () => {
        //TODO useApiFetch util func to call apis
        alert(`Added: ${mailId}`);
        toggleForm()
    };
    
  return (
    <div
      id="add-user-form"
      className="absolute left-0 mx-auto hidden justify-center items-center z-30 bg-gray-500 opacity-100 md:opacity-80 w-[100%] h-[100%] rounded-lg"
    >
      <button
        className="absolute top-2 right-2 text-white"
        onClick={toggleForm}
      >
        Close
      </button>
      <div className="rounded-lg top-10 lg:top-auto bg-white md:w-[50%] md:h-[50%] w-[90%] h-[50%] lg:w-[30%] lg:h-[30%] absolute z-50 p-4">
        <h1 className="font-bold">Add new chat</h1>
        <input
          type="text"
          autoComplete="off"
          placeholder="enter user email ... "
          value={mailId}
          onChange={(e) => setMailId(e.target.value)}
          className="border-2 rounded-lg text-black h-[50px] w-[100%] outline-blue-500 p-2"
        />
        <button
          onClick={() => {
            addNewUser();
                  }}
                  className="bg-black hover:bg-gray-700 font-semibold h-[50px] rounded-lg w-[100%] my-2 text-white"
              >
                  ADD
        </button>
      </div>
    </div>
  );
};

export default AddUser;
