import React from "react";
import "../../styles/landingPage/newscard.css";
import { cutstringlength, convertDate } from "../../functions";

const Newscard = ({ title, date, urlImage }) => {
  return (
    <>
      {title && date && urlImage && (
        <div className="news-card">
          <div className="newscard-image">
            <img src={urlImage || ""} alt={title} />
          </div>
          <div>
            <p className="news-title newscard-title">
              {cutstringlength(title, 50)}
            </p>
            <p className="newscard-date">{convertDate(date)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Newscard;
