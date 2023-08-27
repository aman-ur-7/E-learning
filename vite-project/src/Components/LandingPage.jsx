import React from "react";
import { NavLink } from "react-router-dom";
import slay from "../assets/Saly-10.png";
import { BsFillMicFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const LandingPage = () => {
  const mic = () => {};
  const search = () => {};

  return (
    <div className="ladning-page">
      <section className="landing-header">
        <div>
          e<span>Dex</span>
        </div>
        <div>
          <span>home</span>
          <span>about</span>
          <span>course</span>
          <span>blog</span>
          <span>Contact</span>
        </div>
        <div></div>
        <NavLink to="/" className="landing-nav">
          <button>Sign out</button>
        </NavLink>
      </section>
      <section className="landing-content">
        <div className="landing-about">
          <h3>START TO SUCCESS</h3>
          <h1>
            Access To 5000+ Courses <br /> from 300 Instructors <br />&
            Institutions
          </h1>
          <p>
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <BsFillMicFill
              onClick={mic}
              className="mic"
              color="grey"
              size={33}
            />
            <BiSearch
              onClick={search}
              className="search"
              color="white"
              size={33.5}
            />
          </div>
        </div>
        <div className="landing-image">
          <img src={slay} alt="search-bar" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
