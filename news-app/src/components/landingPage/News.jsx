import React, { useEffect } from "react";
import "../../styles/landingPage/news.css";
import "../../styles/global.css";
import Newscard from "./Newscard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDataContextVal } from "../../context/dataContext";
import { updateTopNews } from "../../context/actions";

const News = ({ data }) => {
  const [{ topNews }, dispatch] = useDataContextVal();

  useEffect(() => {
    dispatch(updateTopNews(data));
  }, [data]);

  return (
    <div className="news">
      <p className="topheader">News</p>
      {data?.map((i, indx) => {
        return (
          <Link to={`/topnews/${i.url}`}>
            <Newscard
              title={i.title}
              date={i.publishedAt}
              urlImage={i.urlToImage}
              key={indx}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default News;
