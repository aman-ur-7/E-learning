import React from "react";
import HeaderMain from "./Header";
import menImage from "../assets/menImage.png";
import menBorder from "../assets/menBorder.png";
import menBackground from "../assets/menBackground.png";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import Union from "../assets/Union.png";

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
            <button>Get started</button>
            <button>Learn more</button>
          </div>
        </div>
        <div className="arrow-png">
          <img src={Vector} alt="" />
          <img src={Vector2} alt="" />
          <img src={Union} alt="" />
        </div>
        <div className="hero-jpg">
          <img src={menImage} alt="image" />
          <img src={menBorder} alt="" />
          <img src={menBackground} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMain;
