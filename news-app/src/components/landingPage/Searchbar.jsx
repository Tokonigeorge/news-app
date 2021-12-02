import React from "react";
import "../../styles/landingPage/searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="Search news, topics and more"
      />
    </div>
  );
};

export default Searchbar;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      width={16}
      viewBox="0 0 20 20"
      fillRule="#58677d"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
