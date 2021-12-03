import React from "react";
import "../../styles/landingPage/news.css";
import "../../styles/global.css";
import Newscard from "./Newscard";

const News = ({ data }) => {
  return (
    <div className="news">
      <p className="topheader">News</p>
      {data?.map((i, indx) => (
        <Newscard
          title={i.title}
          date={i.publishedAt}
          urlImage={i.urlToImage}
          key={indx}
        />
      ))}
    </div>
  );
};

export default News;
