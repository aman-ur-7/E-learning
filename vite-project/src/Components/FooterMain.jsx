import React from "react";
import { CgGirl } from "react-icons/cg";
import { FaLightbulb } from "react-icons/fa";
import { Tb24Hours } from "react-icons/tb";

const FooterMain = () => {
  return (
    <footer>
      <div>
        <h1>
          why we are <br />
          the best
        </h1>
        <p>A learning system based on formalised teaching with help of.... </p>
      </div>
      <div>
        <CgGirl className="react-icons" size={40} />
        <span>expert teacher</span>
        <p>A learning system based on formalised teaching</p>
      </div>
      <div>
        <FaLightbulb className="react-icons" size={40} />
        <span>online courses</span>
        <p>A learning system based on formalised teaching</p>
      </div>
      <div>
        <Tb24Hours className="react-icons" size={40} />
        <span>24/7 support</span>
        <p>A learning system based on formalised teaching</p>
      </div>
    </footer>
  );
};

export default FooterMain;
