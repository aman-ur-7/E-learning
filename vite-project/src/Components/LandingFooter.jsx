import React from "react";
import retange1 from "../assets/Rectangle161.png";
import retange2 from "../assets/Rectangle162.png";
import retange3 from "../assets/Rectangle163.png";
import retange4 from "../assets/Rectangle164.png";
import { AiOutlineFontColors } from "react-icons/ai";

const LandingFooter = () => {
  return (
    <div className="landing-footer">
      <div>
        <h1>
          Student <span>Feedback</span>
        </h1>
        <p>
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>
      <div>
        <div className="feedback-content">
          <div>
            <img src={retange4} alt="" />
            <div>
              <h1>Guy Hawkins</h1>
              <p>UI-UX Designer</p>
            </div>
            <AiOutlineFontColors />
          </div>
          <p>
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
            nulla massa, hendrerit
          </p>
        </div>
        <div className="feedback-content">
          <div>
            <img src={retange3} alt="" />
            <div>
              <h1>Guy Hawkins</h1>
              <p>UI-UX Designer</p>
            </div>
            <AiOutlineFontColors />
          </div>
          <p>
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
            nulla massa, hendrerit
          </p>
        </div>
        <div className="feedback-content">
          <div>
            <img src={retange2} alt="" />
            <div>
              <h1>Guy Hawkins</h1>
              <p>UI-UX Designer</p>
            </div>
            <AiOutlineFontColors />
          </div>
          <p>
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
            nulla massa, hendrerit
          </p>
        </div>
        <div className="feedback-content">
          <div>
            <img src={retange1} alt="" />
            <div>
              <h1>Guy Hawkins</h1>
              <p>UI-UX Designer</p>
            </div>
            <AiOutlineFontColors />
          </div>
          <p>
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
            nulla massa, hendrerit
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
