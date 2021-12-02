import React from "react";
import "../../styles/landingPage/latestnews.css";
import "../../styles/global.css";
import Searchbar from "./Searchbar";

const Latestnews = () => {
  return (
    <div className="latest-news">
      <p className="topheader">Latest News</p>
      <Searchbar />
    </div>
  );
};

export default Latestnews;
