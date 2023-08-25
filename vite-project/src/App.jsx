import React from "react";
import MainPage from "./MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Auth from "./Auth";
import Business from "./CourseCategory/Business";
import FrontEnd from "./CourseCategory/FrontEnd";
import MernStack from "./CourseCategory/MernStack";
import ReactJs from "./CourseCategory/ReactJs";
import BugFix from "./CourseCategory/BugFix";
import ElearnPage from "./ElearnPage";
import Ai from "./Ai";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/elearn" element={<ElearnPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/backend" element={<MernStack />} />
        <Route path="/reactjs" element={<ReactJs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/bugfix" element={<BugFix />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </>
  );
};

export default App;
