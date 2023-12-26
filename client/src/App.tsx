import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./components/home";
import Signin from "./components/signin";
import Dashboard from "./components/dashboard";
import CustomToastContainer from "./lib/toast";


function App() {
  return (
    <div className="App">
      <Header />
      <CustomToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
