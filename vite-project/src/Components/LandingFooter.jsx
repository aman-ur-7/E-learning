import React from "react";
import retange2 from "../assets/Rectangle162.png";
import retange3 from "../assets/Rectangle163.png";
import retange4 from "../assets/Rectangle164.png";
import { FaComments, FaRobot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <section className="landing-footer">
      <div>
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
              <div>
                <img src={retange4} alt="" />
                <div>
                  <h1>Guy Hawkins</h1>
                  <p>UI-UX Designer</p>
                </div>
              </div>
              <FaComments color="#FFC27A" size={30} />
            </div>
            <p>
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst. Praesent nulla massa, hendrerit
            </p>
          </div>
          <div className="feedback-content">
            <div>
              <div>
                <img src={retange3} alt="" />
                <div>
                  <h1>Guy Hawkins</h1>
                  <p>UI-UX Designer</p>
                </div>
              </div>
              <FaComments color="#FFC27A" size={30} />
            </div>
            <p>
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst. Praesent nulla massa, hendrerit
            </p>
          </div>
          <div className="feedback-content">
            <div>
              <div>
                <img src={retange2} alt="" />
                <div>
                  <h1>Guy Hawkins</h1>
                  <p>UI-UX Designer</p>
                </div>
              </div>
              <FaComments color="#FFC27A" size={30} />
            </div>
            <p>
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst. Praesent nulla massa, hendrerit
            </p>
          </div>
        </div>
      </div>
      <div className="ai-artificial">
        <Link to="/ai">
          <FaRobot size={40} />
        </Link>
      </div>
    </section>
  );
};

export default LandingFooter;
