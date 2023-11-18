import React from "react";
import SigninForm from "./form";
import {toast} from 'react-toastify'

export default function Signin() {

  toast.success("Hurrah! We did it!", {
    onOpen: () => {
      console.log('Called me success');
    },
    toastId: 'success-toast-1'
  })

  return (
    <div className="flex justify-center items-center h-[86vh]">
          <SigninForm />
    </div>
  );
}
