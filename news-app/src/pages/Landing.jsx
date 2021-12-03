import React, { useState, useEffect } from "react";
import Latestnews from "../components/landingPage/Latestnews";
import News from "../components/landingPage/News";
import "../styles/landingPage/landingpage.css";
import { news } from "../api/mockupnews";

const fetchData = () => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=ng&pageSize=10&apiKey=71dfd63489ab4d5ba815b04cceb3ce8c"
  )
    .then((result) => result.json())
    .then((i) => (data = i.articles))
    .catch((err) => console.error(err));
};

const Landing = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=ng&pageSize=10&apiKey=71dfd63489ab4d5ba815b04cceb3ce8c"
      )
        .then((result) => result.json())
        .then((i) => setData(i.articles), setLoading(!data))
        .catch((err) => setError(true));
    };
    !data && fetchData();
    console.log(data);
  }, []);

  return (
    <div className="landing-page">
      {loading && !data ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <Latestnews bignews={data?.[0]} news={news} />
          <News data={data.slice(1)} />
        </>
      )}
    </div>
  );
};

export default Landing;
