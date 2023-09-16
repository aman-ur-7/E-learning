import React, { useEffect, useState } from "react";
import axios from "axios";
import * as react from "@chakra-ui/react";

const Blogging = () => {
  const [file, setFile] = useState();
  // const [img, setImg] = useState();
  const [subject, setSubject] = useState();
  const [author, setAuthor] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);

  function refreshPage() {
    window.location.reload(true);
  }
  const items = JSON.parse(localStorage.getItem("dataToPersist"));

  const upload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("subject", subject);
      formData.append("author", items.data.intrest);
      formData.append("text", text);
      const respond = await axios.post(
        "http://localhost:7001/uploads",
        formData
      );

      if (formData) {
        console.log(formData);
        setTimeout(() => {
          refreshPage();
        }, 2000);
      }
      console.log(respond);
    } catch (error) {
      setLoading(true);
      alert("Fill all fields");
      setTimeout(() => {
        refreshPage();
      }, 0);
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
      <span>Upload Your Blog</span>
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
        <react.Button className="btn" type="submit" isLoading={loading}>
          upload
        </react.Button>
        {/* <button onClick={getImage}>get</button> */}
      </form>
    </div>
  );
};

export default Blogging;
