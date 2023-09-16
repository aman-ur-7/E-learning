import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogging from "../Components/Blogging";

const ReactJs = () => {
  const [img, setImg] = useState("");
  console.log(img);

  const getImage = async () => {
    try {
      const respond = await axios.get("http://localhost:7001/image");
      // setImg(respond.data[0].image);
      setImg(respond);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      {/* {img ? (
        <img
          src={`http://localhost:7001/images/${img.data[0].image}`}
          alt="image"
        />
      ) : (
        <p>No image available</p>
      )} */}
      {/* <button onClick={getImage}>get</button> */}
      <Blogging />
    </div>
  );
};

export default ReactJs;
