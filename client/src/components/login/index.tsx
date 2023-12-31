import React, { useState } from "react";
import axios from "axios";
import $ from "jquery";
import { toast } from "react-toastify";
import setCookies from "../../utils/setCookies";

const Login = (props: any) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [passType, setPassType] = useState("password");

  const login = async () => {
    try {
      toast.loading("Logging in ...", { toastId: "loading-login" });

      const { data } = await axios.post(
        `http://localhost:6969/api/user/login`,
        credentials
      );
      if (data.success) {
        toast.dismiss();
        toast.success(data.message, { toastId: "login-success" });
        setCookies([
          { name: "name", value: data.data.name },
          { name: "email", value: data.data.email },
          { name: "isVerified", value: data.data.isVerified },
          { name: "accessToken", value: data.data.accessToken },
          { name: "isUserLoggedIn", value: true },
        ]);
        window.location.replace("/dashboard");
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.response.data.message, { toastId: "login-error" });
    }
  };

  return (
    <div className="flex justify-center items-center h-[86vh]">
      <div className="p-4 w-[95vw] lg:w-[30vw] bg-white mx-auto border rounded-lg lg:translate-y-[-150px]">
        <h1 className="text-[1.8rem]">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
          value={credentials.email}
          onChange={(e) => {
            setCredentials({
              ...credentials,
              email: e.target.value,
            });
          }}
        />

        <input
          type={passType}
          name="password"
          placeholder="Password"
          className="w-[100%] border outline-none rounded-lg h-[40px] p-2 mt-4"
          value={credentials.password}
          onChange={(e) => {
            setCredentials({
              ...credentials,
              password: e.target.value,
            });
          }}
        />

        <div
          className="mt-4 mb-2"
          onClick={() => {
            if ($("#show-login-pass").is(":checked")) {
              setPassType("text");
            } else {
              setPassType("password");
            }
          }}
        >
          <input
            id="show-login-pass"
            type="Checkbox"
            placeholder="Show Password"
          />
          <label className="text-gray-500"> Show password</label>
        </div>

        <button
          onClick={login}
          className="bg-[black] border hover:bg-[#ffffff] hover:text-black my-2 h-[50px] w-[100%] rounded-lg p-2 text-white"
        >
          Submit
        </button>

        <a href="/signin">
          Don't have an account?{" "}
          <label className="underline cursor-pointer">Signup here</label>
        </a>
      </div>
    </div>
  );
};

export default Login;
