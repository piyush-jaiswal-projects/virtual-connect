import setCookies from "./setCookies";

const LogoutUser = () => {
  setCookies([
    { name: "name", value: null },
    { name: "email", value: null },
    { name: "isVerified", value: null },
    { name: "accessToken", value: null },
    { name: "isUserLoggedIn", value: false },
  ]);

  window.location.reload();
};

export default LogoutUser;
