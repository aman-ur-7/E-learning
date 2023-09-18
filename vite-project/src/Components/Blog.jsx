import React from "react";
import retange1 from "../assets/Rectangle164.png";
import retange2 from "../assets/Rectangle162.png";
import retange3 from "../assets/Rectangle163.png";
import retange4 from "../assets/Rectangle164.png";

const Blog = () => {
  return (
    <div className="blog-page">
      <div>
        <h1>
          Our Best <span>Instructor</span>
        </h1>
        <p>
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>
      <div className="swiper-slider">
        <div>
          <img src={retange1} alt="" />
          <span>Jacob Jones</span>
          <p>UI-UX Design Expart</p>
        </div>
        <div>
          <img src={retange2} alt="" />
          <span>Jacob Jones</span>
          <p>UI-UX Design Expart</p>
        </div>
        <div>
          <img src={retange3} alt="" />
          <span>Jacob Jones</span>
          <p>UI-UX Design Expart</p>
        </div>
        <div>
          <img src={retange4} alt="" />
          <span>Jacob Jones</span>
          <p>UI-UX Design Expart</p>
        </div>
        <div>
          <img src={retange2} alt="" />
          <span>Jacob Jones</span>
          <p>UI-UX Design Expart</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
