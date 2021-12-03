import React from "react";
import "../styles/newsPage/newspage.css";
import Imageslider from "../components/newsPage/Imageslider";

const Newspage = ({ news }) => {
  console.log(news);
  return (
    <div className="newspage">
      <div className="newspage-header">
        <p className="newspage-date">29th May</p>
        <p className="news-author">Title</p>
      </div>
      <p className="news-title">
        This is the bane of true entrepreneurship and something
      </p>
      <p className="news-content"></p>
      <Imageslider />
    </div>
  );
};

export default Newspage;
