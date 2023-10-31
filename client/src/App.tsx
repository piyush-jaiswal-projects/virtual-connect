import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Signin from "./components/signin/signin";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
