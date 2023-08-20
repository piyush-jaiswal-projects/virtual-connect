import React from "react";

export default function OtpForm(props: { email: string }) {
  const [otp, setOtp] = React.useState("");

  const submitOtp = () => {
    // api call to verfy otp and redirect on success
    // add access token to cookies
  };

  return (
    <div
      id="otp-form"
      className="p-4 w-[30vw] hidden bg-white mx-auto rounded-lg translate-up"
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
