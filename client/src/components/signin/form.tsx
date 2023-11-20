import React from "react";
import OtpForm from "./otp-form";
import $ from "jquery";
import axios from "axios";
import { toast } from "react-toastify";

export default function SigninForm() {
  const [passType, setPassType] = React.useState("password");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = React.useState({
    isLoading: false,
    msg: "",
    isError: false,
  });

  const submitDetails = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      setStatus({
        ...status,
        isError: true,
        msg: "Please enter email and password",
      });
      return;
    }

    toast.loading("Signing up ...", { toastId: "loading-signin-form" });

    axios
      .post(`http://localhost:5001/api/user/signin`, form)
      .then((response) => {
        const { message, process, success } = response.data;

        toast.dismiss();
        toast.success(message, { toastId: "signin-success" });

        if (success) {
          if (process === "otp") {
            $("#signin-form").addClass("hidden");
            $("#otp-form").removeClass("hidden");
            return;
          }
          toast.info("Redirecting to dashboard ...", { toastId: "info-dashboard" });
          setTimeout(() => window.location.replace("/dashboard"), 5000);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <OtpForm email={form.email} />
      <div
        id="signin-form"
        className="p-4 w-[95vw] lg:w-[30vw] bg-white mx-auto relative lg:top-[50px] lg:translate-y-[-150px] border rounded-lg"
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
