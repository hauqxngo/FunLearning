import React from "react";
import Header from "./Header";
import "./Home.css";

const Home = ({ login }) => {
  return (
    <>
      <Header login={login} />
    </>
  );
};

export default Home;
