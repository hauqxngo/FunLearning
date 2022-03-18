import React from "react";
import Header from "./Header";
import Features from "./Features";
import features from "./featureList";
import About from "./About";
import CallAction from "./CallAction";
import Footer from "./Footer";
import "./Home.css";

const Home = ({ login }) => {
  return (
    <>
      <Header login={login} />
      <Features features={features} />
      <About />
      <CallAction login={login} />
      <Footer />
    </>
  );
};

export default Home;
