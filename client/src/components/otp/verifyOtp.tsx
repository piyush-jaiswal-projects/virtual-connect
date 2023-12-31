import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const VerifyOtp = (props: any) => {
  const [otp, setOtp] = React.useState("");
  const { email } = useParams();

  const submitOtp = async () => {
    try {
      toast.loading("Verifying OTP ...", { toastId: "loading-id-verifyotp" });

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/otp/verifyOtp`,
        {
          email: email,
          otp: otp,
        }
      );
      if (data.success) {
        window.location.replace("/login");
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.response.data.message, { toastId: "otp-verify-error" });
    }
  };

  return (
    <div className="flex justify-center items-center h-[86vh]">
      <div className="p-4 w-[95vw] lg:w-[30vw] bg-white mx-auto rounded-lg lg:translate-y-[-150px]">
        <h1 className="text-[1.8rem]">Verify email</h1>
        <p>Please enter OTP sent to {email} </p>

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
    </div>
  );
};

export default VerifyOtp;
