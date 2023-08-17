import React from "react";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
