import React, { useEffect, useState } from "react";
import { useData } from "../src/DataContext";
import LandingFooter from "./Components/LandingFooter";
import LandingPage from "./Components/LandingPage";
import ContactFooter from "./Components/ContactFooter";
import About from "./Components/AboutPage";
import Blog from "./Components/Blog";
import Course from "./Components/Course";

const ElearnPage = () => {
  const { dataFromLogin } = useData("");
  const [persistedData, setPersistedData] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("dataToPersist");
    if (storedData) {
      setPersistedData(JSON.parse(storedData));
    }
  }, []);

  return (
    <main className="landing-holder">
      <LandingPage />
      <About />
      <Course />
      <Blog />
      <LandingFooter />
      <ContactFooter />
    </main>
  );
};

export default ElearnPage;
