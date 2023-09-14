import React, { useEffect, useState } from "react";
import axios from "axios";

const ReactJs = () => {
  const [file, setFile] = useState();
  const [img, setImg] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const respond = await axios.post(
        "http://localhost:7001/uploads",
        formData
      );
      console.log(respond);
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = async () => {
    await axios
      .get("http://localhost:7001/image")
      .then((result) => {
        setImg(result.data[3].image);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <input
        type="file"
        placeholder="upload"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {img ? (
        <img src={`http://localhost:7001/images/${img}`} alt="image" />
      ) : (
        <p>No image available</p>
      )}
      <button onClick={upload}>upload</button>
      <br />
      <button onClick={getImage}>get</button>
    </div>
  );
};

export default ReactJs;
