import React, { useEffect, useState } from "react";
import axios from "axios";

const ReactJs = () => {
  const [file, setFile] = useState();
  // const [img, setImg] = useState();
  const [subject, setSubject] = useState();
  const [author, setAuthor] = useState();
  const [text, setText] = useState();

  function refreshPage() {
    window.location.reload(true);
  }

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("subject", subject);
      formData.append("author", author);
      formData.append("text", text);
      // setAuthor("react");
      const respond = await axios.post(
        "http://localhost:7001/uploads",
        formData
      );

      if (formData) {
        const timer = setTimeout(() => {
          refreshPage();
        }, 6000);
        return () => clearTimeout(timer);
      }
      console.log(respond);
    } catch (error) {
      console.log(error);
    }
  };

  // const getImage = async () => {
  //   await axios
  //     .get("http://localhost:7001/image")
  //     .then((result) => {
  //       setImg(result.data[0].image);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getImage();
  // }, []);

  return (
    <div className="blog">
      <form className="blog-form" onSubmit={upload}>
        <input
          type="text"
          placeholder="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="file"
          placeholder="upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* {img ? (
          <img src={`http://localhost:7001/images/${img}`} alt="image" />
        ) : (
          <p>No image available</p>
        )} */}

        <textarea
          name=""
          cols="100"
          rows="10"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className="btn" type="submit">
          upload
        </button>
        {/* <button onClick={getImage}>get</button> */}
      </form>
    </div>
  );
};

export default ReactJs;
