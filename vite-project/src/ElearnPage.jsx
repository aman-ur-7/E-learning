import React from "react";
import { useData } from "../src/DataContext";

const ElearnPage = () => {
  const { dataFromLogin } = useData("");

  return <>the main page</>;
};

export default ElearnPage;
