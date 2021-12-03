import React from "react";
import "../../styles/landingPage/latestnews.css";
import "../../styles/global.css";
import Searchbar from "./Searchbar";
import Bignewscard from "./Bignewscard";
import Smallnewscard from "./Smallnewscard";

const Latestnews = ({ bignews, news }) => {
  const paginationNum = [1, 2, 3];
  return (
    <div className="latest-news">
      <p className="topheader">Latest News</p>
      <Searchbar />
      <Bignewscard news={bignews} />
      <div className="pagination-div">
        {news?.map((i, indx) => {
          return (
            <Smallnewscard
              author={i.author}
              title={i.title}
              url={i.image}
              des={i.description}
              key={indx}
            />
          );
        })}
      </div>
      <div className="pagination">
        <span>
          <ArrowLeft />
        </span>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <span></span>
      </div>
    </div>
  );
};

export default Latestnews;

const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fillRule="#2d3848"
    >
      <path
        fillRule="evenodd"
        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
