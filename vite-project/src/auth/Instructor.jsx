import React from "react";
import { NavLink } from "react-router-dom";

const Instructor = () => {
  return (
    <>
      <NavLink to="/design">Design</NavLink>
      <NavLink to="/development">Development</NavLink>
      <NavLink to="/linkedin">LinkedIn</NavLink>
      <NavLink to="/business">Business</NavLink>
      <NavLink to="/bugfixteacher">BugFixTeacher</NavLink>
    </>
  );
};

export default Instructor;
