import React from "react";
import "../../styles/global.css";
import "../../styles/landingPage/smallnewscard.css";

const Smallnewscard = ({ author, title, url, des }) => {
  return (
    <div className="small-news-card">
      <div className="small-image-card">
        <img src={url} alt="" />
      </div>
      <div className="small-news-content">
        <p className="news-author">{author}</p>
        <p className="news-title">{title}</p>
        <p className="news-des">{des}</p>
      </div>
    </div>
  );
};

export default Smallnewscard;
