import React from "react";
import "../../styles/global.css";
import "../../styles/landingPage/smallnewscard.css";

const Smallnewscard = () => {
  return (
    <div className="small-news-card">
      <div className="small-image-card"></div>
      <div className="small-news-content">
        <p className="news-author">Author</p>
        <p className="news-title">
          This is the headline title for the news, I guess
        </p>
        <p className="news-des">
          This is a little news description for you. Saturday night live
          starring Jim Carrey, hey that rhymes, what do you say about that?
          Pussy cat, Pussy cat
        </p>
      </div>
    </div>
  );
};

export default Smallnewscard;
