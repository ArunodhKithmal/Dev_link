
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Footer from "./common/footer/Footer";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import Signout from "./components/Signout/Signout";
import Sent from "./components/subscription/sent";



function App() {
  const { productItems } = Data;

  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Pages productItems={productItems} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/sent" element={<Sent />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
