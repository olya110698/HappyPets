import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Advice from "./pages/Advice";
import OurServices from "./pages/OurServices";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/adviсe" element={<Advice />} />
        <Route path="/our_services" element={<OurServices />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}
