import React from "react";
import OtpForm from "./otp-form";
import $ from "jquery";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik } from "formik";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SigninForm() {
  const [passType, setPassType] = React.useState("password");

  const submitDetails = async (values: FormValues) => {
    toast.loading("Signing up ...", { toastId: "loading-signin-form" });
    axios
      .post(`http://localhost:5001/api/user/signin`, values)
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
          toast.info("Redirecting to dashboard ...", {
            toastId: "info-dashboard",
          });
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
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          var errors: FormValues = {
            name: "",
            email: "",
            password: "",
          };
          if (!values.email) {
            // validate email
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            // validate password
            errors.password = "Required";
          }

          if (!values.name) {
            // validate name
            errors.name = "Required";
          }

          return errors;
        }}

        onSubmit={async (values) => {
          console.log("clicked");
          
          try {
            submitDetails(values);
          } catch (error: any) {
            toast.error(error.message);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <>
            <OtpForm email={values.email} />
            <div
              id="signin-form"
              className="p-4 w-[95vw] lg:w-[30vw] bg-white mx-auto relative lg:top-[50px] lg:translate-y-[-150px] border rounded-lg"
            >
              <h1 className="text-[1.8rem]">Signin</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-[100%] border outline-none rounded-lg h-[40px] p-2 mt-4"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {<small>{errors.name && touched.name && errors.name}</small>}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-[100%] border outline-none rounded-lg h-[40px] p-2 mt-4"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {<small>{errors.email && touched.email && errors.email}</small>}

                <input
                  type={passType}
                  name="password"
                  placeholder="Password"
                  className="w-[100%] border outline-none rounded-lg h-[40px] p-2 mt-4"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  <small>
                    {errors.password && touched.password && errors.password}
                  </small>
                }

                <br />

                <div className="mt-4 mb-2">
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
                </div>

                <button
                  type="submit"
                  onClick={() => submitDetails(values)
                  }
                  className="bg-[black] border hover:bg-[#ffffff] hover:text-black my-2 h-[50px] w-[100%] rounded-lg p-2 text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </Formik>
    </>
  );
}
