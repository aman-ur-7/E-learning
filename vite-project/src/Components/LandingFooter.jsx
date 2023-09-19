import React from "react";
import retange1 from "../assets/Rectangle161.png";
import retange2 from "../assets/Rectangle162.png";
import retange3 from "../assets/Rectangle163.png";
import retange4 from "../assets/Rectangle164.png";
import { FaComments } from "react-icons/fa6";

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
    </section>
  );
};

export default LandingFooter;
