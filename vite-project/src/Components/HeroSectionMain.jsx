import React from "react";
import HeaderMain from "./Header";
import menImage from "../assets/menImage.png";

const HeroSectionMain = () => {
  return (
    <section className="hero-section">
      <HeaderMain />
      <div className="hero-content">
        <div>
          <h1>
            study from <br /> home with expert
          </h1>
          <div>
            <div className="vertical-line"></div>
            <p>
              A learning system based on formalized teaching with the help of
              resuources .
            </p>
          </div>
          <div className="hero-buttons">
            <button>get started</button>
            <button>learn more</button>
          </div>
        </div>
        <div className="arrow-png"></div>
        <div className="hero-jpg">
          <img src={menImage} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMain;
