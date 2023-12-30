import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function OtpForm(props: { email: string }) {
  const [otp, setOtp] = React.useState("");

  const submitOtp = () => {
    toast.loading("Verifying OTP ...", { toastId: "loading-id-verifyotp" });

    axios
      .post(`http://localhost:6969/api/otp/verifyOtp`, {
        email: props.email,
        otp: otp,
      })
      .then((response) => {
        const { message, process, success } = response.data;

        toast.dismiss();
        toast.success(message, { toastId: "otp-signin-success" });
        if (success && process === "otp") {
          window.location.replace("/dashboard");
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };

  return (
    <div
      id="otp-form"
      className="p-4 w-[95vw] lg:w-[30vw] hidden bg-white mx-auto rounded-lg lg:translate-y-[-150px]"
    >
      <h1 className="text-[1.8rem]">Verify email</h1>
      <p>Please enter OTP sent to {props.email} </p>

      <input
        type="text"
        placeholder="OTP"
        className="w-[100%] border outline-none rounded-lg h-[40px] p-2 my-2"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
        }}
      />

      <button
        onClick={submitOtp}
        className="bg-[black] border hover:bg-[#ffffff] hover:text-black my-2 h-[50px] w-[100%] rounded-lg p-2 text-white"
      >
        Submit
      </button>

      <a href="/signin">Wanna change mail id ? Click here</a>
    </div>
  );
}
