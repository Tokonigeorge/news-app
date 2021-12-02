import React from "react";
import Latestnews from "../components/landingPage/Latestnews";
import News from "../components/landingPage/News";
import "../styles/landingPage/landingpage.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Latestnews />
      <News />
    </div>
  );
};

export default Landing;
