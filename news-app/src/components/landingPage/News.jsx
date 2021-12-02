import React from "react";
import "../../styles/landingPage/news.css";
import "../../styles/global.css";
import Newscard from "./Newscard";

const News = () => {
  return (
    <div className="news">
      <p className="topheader">News</p>
      <Newscard />
      <Newscard />
      <Newscard />
      <Newscard />
      <Newscard />
      <Newscard />
    </div>
  );
};

export default News;
