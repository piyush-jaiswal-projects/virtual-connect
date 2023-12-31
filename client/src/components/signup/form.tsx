import React from "react";
import axios from "axios";
import $ from "jquery";
import { toast } from "react-toastify";
import { Formik } from "formik";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SigninForm() {
  const [passType, setPassType] = React.useState("password");

  const signUp = async (values: FormValues) => {
    try {
      toast.loading("Signing up ...", { toastId: "loading-signin-form" });
      const { data } = await axios.post(
        `http://localhost:6969/api/user/signup`,
        values
      );
      toast.dismiss();
      if (data.success) {
        window.location.replace(`/verifyOtp/${values.email}`);
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.response.data.message, { toastId: "signin-failed" });
    }
  };

  return (
    <>
      <div id="signin-form" className="">
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
              signUp(values);
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
            handleSubmit,
          }) => (
            <>
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
                  {
                    <small>
                      {errors.email && touched.email && errors.email}
                    </small>
                  }

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

                  <div
                    className="mt-4 mb-2"
                    onClick={() => {
                      if ($("#show-pass").is(":checked")) {
                        setPassType("text");
                      } else {
                        setPassType("password");
                      }
                    }}
                  >
                    <input
                      id="show-pass"
                      type="Checkbox"
                      placeholder="Show Password"
                    />
                    <label className="text-gray-500"> Show password</label>
                  </div>

                  <button
                    type="submit"
                    onClick={() => signUp(values)}
                    className="bg-[black] border hover:bg-[#ffffff] hover:text-black my-2 h-[50px] w-[100%] rounded-lg p-2 text-white"
                  >
                    Submit
                  </button>

                  <a href="/login">Already have an account? <label className="underline cursor-pointer">Login here</label></a>
                </form>
              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
