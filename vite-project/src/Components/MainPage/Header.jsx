import React from "react";
import { PiLockFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const HeaderMain = () => {
  return (
    <section className="header">
      <div>
        <div className="logo">
          E-<span>Learn</span>
        </div>
        <div className="header-content">
          <span>Home</span>
          <span>about</span>
          <span>course</span>
          <span>blog</span>
          <span>contact</span>
        </div>
        <div className="auth-buttons">
          <NavLink to="/login" className="nav-link">
            <div>
              <PiLockFill size={20} />
              <button>Login</button>
            </div>
          </NavLink>
          <NavLink to="/signup">
            <button>sign up</button>
          </NavLink>
        </div>
      </div>
      <div className="clip-path"></div>
    </section>
  );
};

export default HeaderMain;
