import React from "react";
import { PiLockFill } from "react-icons/pi";

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
          <div>
            <PiLockFill size={20} />
            <button>login</button>
          </div>
          <button>sign up</button>
        </div>
      </div>
      <div className="clip-path"></div>
    </section>
  );
};

export default HeaderMain;
