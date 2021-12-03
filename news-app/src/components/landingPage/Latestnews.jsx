import React, { useState, useEffect } from "react";
import "../../styles/landingPage/latestnews.css";
import "../../styles/global.css";
import Searchbar from "./Searchbar";
import Bignewscard from "./Bignewscard";
import Smallnewscard from "./Smallnewscard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDataContextVal } from "../../context/dataContext";
import {
  updateMainNews,
  updateLatestNews,
  updateActive,
} from "../../context/actions";

const Latestnews = ({ bignews, _latestNews }) => {
  const [{ latestNews, active }, dispatch] = useDataContextVal();
  // const [active, setActive] = useState(1);
  const paginationNum = [1, 2, 3];
  const handlePagination = (i) => {
    updateActive(i);
  };

  const handlePrevArrow = () => {
    if (active === 1) {
      return;
    } else if (active > 1) {
      updateActive((active) => active - 1);
    }
  };

  const handleNextArrow = () => {
    if (active === 3) {
      return;
    } else if (active < 3) {
      updateActive((active) => active + 1);
    }
  };

  useEffect(() => {
    dispatch(updateMainNews(bignews));
    dispatch(updateLatestNews(_latestNews));
  }, [bignews, _latestNews]);
  return (
    <>
      <div className="latest-news">
        <p className="topheader">Latest News</p>
        <Searchbar />
        <Link to="/mainnews">
          <Bignewscard news={bignews} />
        </Link>
        <div className="pagination-div">
          {_latestNews?.map((i, indx) => {
            return (
              <Link to={`/latestnews/${i.url}`}>
                {" "}
                <Smallnewscard
                  author={i.author}
                  title={i.title}
                  url={i.urlToImage}
                  des={i.description}
                  key={indx}
                />
              </Link>
            );
          })}
        </div>
        <div className="pagination">
          <span onClick={() => handlePrevArrow()}>
            <ArrowLeft />
          </span>
          {paginationNum?.map((i, indx) => (
            <div
              style={{ backgroundColor: active === indx + 1 && "#2d3848" }}
              key={indx}
              onClick={() => handlePagination(i)}
            >
              {i}
            </div>
          ))}

          <span onClick={() => handleNextArrow()}>
            <ArrowRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default Latestnews;

const ArrowLeft = () => {
  return (
    <svg
      height={20}
      width={20}
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

const ArrowRight = () => {
  return (
    <svg
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fillRule="#2d3848"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
