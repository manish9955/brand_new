import React from "react";
import "./SearchResult.css";

const SearchResult = ({ filter, filter_name }) => {
  // let greeting = `NO videos found by name, ${filter} `;
  return (
    <>
      <div className="search-result">
        <h4>NO videos found by name, "{filter_name}" !</h4>
      </div>
    </>
  );
};

export default SearchResult;
