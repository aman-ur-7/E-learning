import React from "react";
import { PiFileHtmlLight } from "react-icons/pi";
import { TbBusinessplan } from "react-icons/tb";
import { FiServer } from "react-icons/fi";
import { GrReactjs } from "react-icons/gr";
import { HiOutlineBugAnt } from "react-icons/hi2";
import { BsArrowUpRight } from "react-icons/bs";

const Course = () => {
  return (
    <div className="courses">
      <div>
        <h1>
          Most <span> Popular Category</span>
        </h1>
        <p>
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>
      <div className="courses-categories">
        <div>
          <div>
            <TbBusinessplan size={30} />
            <span>Business</span>
          </div>
          <BsArrowUpRight size={20} />
        </div>
        <div>
          <div>
            <PiFileHtmlLight size={30} /> <span>Front-end</span>
          </div>
          <BsArrowUpRight size={20} />
        </div>
        <div>
          <div>
            <FiServer size={30} />
            <span>MERN</span>
          </div>
          <BsArrowUpRight size={20} />
        </div>
        <div>
          <div>
            <GrReactjs size={30} />
            <span>Reactjs</span>
          </div>
          <BsArrowUpRight size={20} />
        </div>
        <div>
          <div>
            <HiOutlineBugAnt size={30} />
            <span>Bug fix</span>
          </div>
          <BsArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Course;
