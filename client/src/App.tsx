import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomToastContainer from "./ui/toast";
import Otp from "./components/Otp";
import { ChatApp, Home, Login, Signup } from "./pages";
import { VerifyOtpForm } from "./components";

const uri = process.env.REACT_APP_API_URL;

function App() {
  fetch(`${uri}/`, {
    method: "GET", //ping to spin up the sleeping server of onrender.com
  });

  return (
    <div className="App">
      <CustomToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ChatApp />} />
          <Route path="/verifyOtp" element={<Otp />} />
          <Route path="/verifyOtp/:email" element={<VerifyOtpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
