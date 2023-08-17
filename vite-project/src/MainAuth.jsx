import React from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Instructor from "./auth/Instructor";

const MainAuth = () => {
  return (
    <>
      <SignUp />
      <Instructor />
    </>
  );
};

export default MainAuth;
