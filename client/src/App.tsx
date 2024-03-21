import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./components/home";
import Signin from "./components/signup";
import Dashboard from "./components/dashboard";
import CustomToastContainer from "./lib/toast";
import VerifyOtp from "./components/otp/verifyOtp";
import Otp from "./components/otp";
import Login from "./components/login";

const uri = process.env.REACT_APP_API_URL;

function App() {
  fetch(`${uri}/`, {
    method: "GET",
  });

  return (
    <div className="App">
      <CustomToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verifyOtp" element={<Otp />} />
          <Route path="/verifyOtp/:email" element={<VerifyOtp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
