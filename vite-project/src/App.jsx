import React from "react";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import MainAuth from "./MainAuth";
import Design from "./CourseCategory/Design";
import Development from "./CourseCategory/Development";
import LinkedIn from "./CourseCategory/LinkedIn";
import Business from "./CourseCategory/Business";
import BugFixTeacher from "./CourseCategory/BugFixTeacher";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<MainAuth />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/business" element={<Business />} />
        <Route path="/bugfixteacher" element={<BugFixTeacher />} />
      </Routes>
    </>
  );
};

export default App;
