import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogging from "../Components/Blogging";

const BugFix = () => {
  const [bug, setBug] = useState("");

  const openBug = async (e) => {
    e.preventDefault();

    try {
      const respond = await axios.get("http://localhost:7001/image");
      if (respond) {
        setBug(respond.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    openBug;
  }, []);

  const filterData = Array.isArray(bug)
    ? bug.filter((item) => item.language === "frontend")
    : [];

  return (
    <div className="react-blog">
      {filterData.map((data) => (
        <div key={data._id}>
          {img ? (
            <img
              src={`http://localhost:7001/images/${data.image}`}
              alt="image"
            />
          ) : (
            <p>No image available</p>
          )}
          <div>
            <span>{data.subject}</span>
            <p>{data.text}</p>
            <h3>{data.date}</h3>
            <hr />
          </div>
        </div>
      ))}
      <Blogging toChild="filter" />
    </div>
  );
};

export default BugFix;
