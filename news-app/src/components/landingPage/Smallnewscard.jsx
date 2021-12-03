import React from "react";
import "../../styles/global.css";
import "../../styles/landingPage/smallnewscard.css";
import { cutstringlength } from "../../functions";

const Smallnewscard = ({ author, title, url, des }) => {
  return (
    <>
      {title && url && des && (
        <div className="small-news-card">
          <div className="small-image-card">
            <img src={url} alt="" />
          </div>
          <div className="small-news-content">
            <p className="news-author">{author || "Anon"}</p>
            <p className="news-title">{cutstringlength(title, 50)}</p>
            <p className="news-des">{cutstringlength(des, 100)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Smallnewscard;
