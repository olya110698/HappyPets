import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Error404 from "./pages/Error404";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}
