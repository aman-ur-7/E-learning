import React, { useEffect, useState } from "react";
import axios from "axios";

const ReactJs = () => {
  const [file, setFile] = useState();

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

  // const reveal = async () => {
  //   try {
  //     const responds = await axios.get("http://localhost:7001/image");
  //     setImg(responds.data[0].image);
  //     console.log(img);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // axios
  //   .get("http://localhost:7001/image")
  //   .then((result) => {
  //     console.log(result);
  //     setImg(result.data[1].image);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div>
      <input
        type="file"
        placeholder="upload"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {/* <img src={`http://localhost:7001/images/` + img} alt="image" /> */}
      <button onClick={upload}>upload</button>
      {/* <button onClick={reveal}>reveal</button> */}
    </div>

    // https://www.youtube.com/watch?v=jfZyqZycjmA
    // How to Upload and Display Images using Multer in the MERN stack | Upload Images in React JS and Node
  );
};

export default ReactJs;
