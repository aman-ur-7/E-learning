import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogging from "../Components/Blogging";

const MernStack = () => {
  const [img, setImg] = useState("");
  console.log(img);

  const getImage = async () => {
    try {
      const respond = await axios.get("http://localhost:7001/image");
      setImg(respond.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImage();
  }, []);
  const filteredData = Array.isArray(img)
    ? img.filter((item) => item.language === "mern")
    : [];
  return (
    <div className="react-blog">
      {filteredData.map((data) => (
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
      <Blogging />
    </div>
  );
};

export default MernStack;
