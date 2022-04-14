import React from "react";
import searchlogo from "../assets/magnifying-glass-search-svgrepo-com.svg";
import "../assets/searchbar.css";

function SearchBar(props) {
  const { searchValue, handleSearchValue } = props;
  console.log(props);
  return (
    <div className="full-searchbar">
      <div className="searchbar">
        <input
        value={searchValue}
          type="text"
          placeholder="Mojito..."
          className="input"
          onChange={(e) => handleSearchValue(e.target.value)}
        />
        <button type="button" className="btn">
          <img src={searchlogo} alt="" className="image-logo" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
