import React from "react";
import "../styles/newsPage/newspage.css";
import Imageslider from "../components/newsPage/Imageslider";
import { convertDate } from "../functions";
import Comment from "../components/newsPage/Comment";

const Newspage = ({ news }) => {
  return (
    <div className="newspage">
      <div className="newspage-header">
        <p className="newspage-date">{convertDate(news?.publishedAt)}</p>
        <p className="news-author">{news?.author || "Anon"}</p>
      </div>
      <p className="news-title">{news?.title}</p>
      {news?.urlToImage && (
        <div className="news-image">
          <img src={news?.urlToImage} alt="" />
        </div>
      )}
      <p className="news-content">
        {news?.content.split("[")?.[0] ||
          "Couldn't load content, please refresh"}
      </p>
      <Comment />
      <Imageslider />
    </div>
  );
};

export default Newspage;
