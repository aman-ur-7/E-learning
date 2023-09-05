import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { PiVideoCameraLight } from "react-icons/pi";
import { TiGroupOutline } from "react-icons/ti";

const NumberCounts = () => {
  return (
    <section className="number-counts">
      <div>
        <GiGraduateCap size={40} />
        <div>
          <span>0</span>
          <p>Instructor</p>
        </div>
      </div>
      <div>
        <GoPeople size={40} />
        <div>
          <span>0</span>
          <p>Student</p>
        </div>
      </div>
      <div>
        <PiVideoCameraLight size={40} />
        <div>
          <span>0</span>
          <p>Video</p>
        </div>
      </div>
      <div>
        <TiGroupOutline size={40} />
        <div>
          <span>0</span>
          <p>User's</p>
        </div>
      </div>
    </section>
  );
};

export default NumberCounts;
