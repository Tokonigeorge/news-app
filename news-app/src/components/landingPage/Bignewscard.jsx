import React from "react";
import "../../styles/landingPage/bignewscard.css";
import "../../styles/global.css";

const Bignewscard = ({ news }) => {
  console.log(news);
  return (
    <div className="big-news-card">
      <div className="image-card">
        <img src={news?.urlToImage || ""} alt="" />
      </div>
      <div className="big-news-content">
        <p className="news-author">{news?.author || "Anon"}</p>
        <p className="news-title">{news?.title}</p>
        <p className="news-des">{news?.description}</p>
      </div>
    </div>
  );
};

export default Bignewscard;

//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
