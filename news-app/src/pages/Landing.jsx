import React, { useState, useEffect } from "react";
import Latestnews from "../components/landingPage/Latestnews";
import News from "../components/landingPage/News";
import "../styles/landingPage/landingpage.css";
import { useDataContextVal } from "../context/dataContext";

const Landing = () => {
  const [{ active }] = useDataContextVal();
  const [news, setNews] = useState();
  const [latestNews, setLatestNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      Promise.all([
        fetch(
          "https://newsapi.org/v2/top-headlines?country=ng&pageSize=10&apiKey=71dfd63489ab4d5ba815b04cceb3ce8c"
        )
          .then((result) => result.json())
          .then((i) => setNews(i.articles)),
        fetch(
          `https://newsapi.org/v2/everything?&q=covid&language=en&pageSize=15&page=${active}&apiKey=71dfd63489ab4d5ba815b04cceb3ce8c`
        )
          .then((result) => result.json())
          .then((i) => setLatestNews(i.articles)),
      ])
        .then(setLoading(!news && !latestNews))
        .catch((err) => setError(err && !loading));
    };
    !news && !latestNews && fetchData();
  }, []);

  return (
    <div className="landing-page">
      {loading && !news && !latestNews ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <Latestnews bignews={news?.[0]} _latestNews={latestNews} />
          <News data={news?.slice(1)} />
        </>
      )}
    </div>
  );
};

export default Landing;
