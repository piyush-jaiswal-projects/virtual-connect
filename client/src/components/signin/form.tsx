import React from "react";
import OtpForm from "./otp-form";
import $ from "jquery";

export default function SigninForm() {
  const [passType, setPassType] = React.useState("password");
  const [form, setForm] = React.useState({
    email: "",
    name: "",
    password: "",
  });

  const [status, setStatus] = React.useState({
    isLoading: false,
    msg: "",
    isError: false,
  });

  const submitDetails = () => {
    if (form.email.length === 0 || form.password.length === 0) {
      setStatus({
        ...status,
        isError: true,
        msg: "Please enter email and password",
      });
      return;
    }

    $("#signin-form").addClass("hidden");
    $("#otp-form").removeClass("hidden");

    // api call to register user and send otp
  };

  return (
    <>
      <OtpForm email={form.email} />
      <div
        id="signin-form"
        className="p-4 w-[30vw] bg-white mx-auto relative top-[50px] translate-up border rounded-lg"
      >
        <h1 className="text-[1.8rem]">Signin</h1>

        <p className={status.isError ? "text-[red]" : "text-[green]"}>
          {status.msg}
        </p>

        <input
          type="text"
          placeholder="Name"
          className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
          value={form.name}
          onChange={(e) => {
            setForm({
              ...form,
              name: e.target.value,
            });
          }}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />

        <input
          type={passType}
          placeholder="Password"
          className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
          value={form.password}
          onChange={(e) => {
            setForm({
              ...form,
              password: e.target.value,
            });
          }}
        />

        <input
          id="show-pass"
          type="Checkbox"
          placeholder="Show Password"
          onClick={() => {
            if ($("#show-pass").is(":checked")) {
              setPassType("text");
            } else {
              setPassType("password");
            }
          }}
        />
        <label className="text-gray-500"> Show password</label>

        <br />

        <button
          onClick={submitDetails}
          className="bg-[black] border hover:bg-[#ffffff] hover:text-black my-2 h-[50px] w-[100%] rounded-lg p-2 text-white"
        >
          Submit
        </button>
      </div>
    </>
  );
}
