import React from "react";
import { NavLink } from "react-router-dom";

const Instructor = () => {
  return (
    <div className="course-list">
      <NavLink to="/frontend">FrontEnd</NavLink>
      <NavLink to="/backend">MernStack</NavLink>
      <NavLink to="/reactjs">ReactJs</NavLink>
      <NavLink to="/business">Business</NavLink>
      <NavLink to="/bugfix">BugFix</NavLink>
    </div>
  );
};

export default Instructor;
