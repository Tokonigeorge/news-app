import React from "react";
import "../../styles/landingPage/latestnews.css";
import "../../styles/global.css";
import Searchbar from "./Searchbar";
import Bignewscard from "./Bignewscard";
import Smallnewscard from "./Smallnewscard";

const Latestnews = () => {
  return (
    <div className="latest-news">
      <p className="topheader">Latest News</p>
      <Searchbar />
      <Bignewscard />
      <div className="pagination-div">
        <Smallnewscard />
        <Smallnewscard />
        <Smallnewscard />
        <Smallnewscard />
        <Smallnewscard />
        <Smallnewscard />
        <Smallnewscard />
      </div>
    </div>
  );
};

export default Latestnews;
