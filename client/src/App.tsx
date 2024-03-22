import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomToastContainer from "./ui/toast";
import Otp from "./components/Otp";
import { ChatApp, Home, Login, Profile, Signup } from "./pages";
import { VerifyOtpForm } from "./components";
import { ErrorBoundary } from "./utils";
import { ErrorPage, Redirect } from "./ui";
import { useApiFetch } from "./utils/hooks";
import { Error } from "./ui/ErrorPage";

function App() {

  const res = useApiFetch(`/`)

  if (res.statusCode === 500)
    return <ErrorPage type={Error["Service Unavailable!"]} />
  
  if (res.axiosErrorMsg === "Network Error")
    return <ErrorPage type={Error["Network Error!"]} />

  return (
    <div className="App">
      <ErrorBoundary
        fallback={<ErrorPage type={Error["Some Error Occurred!"]} />}
      >
        <CustomToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ChatApp />} />
            {/* <Route path="/profile" element={<Redirect uri="/login" />} /> */}
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/verifyOtp" element={<Otp />} />
            <Route path="/verifyOtp/:email" element={<VerifyOtpForm />} />
            <Route element={<ErrorPage type={Error["Not Found!"]} />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
