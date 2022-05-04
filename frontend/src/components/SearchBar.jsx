import React from "react";
import searchlogo from "../assets/magnifying-glass-search-svgrepo-com.svg";
import "../assets/searchbar.css";

function SearchBar({ searchValue, handleSearchValue }) {
  return (
    <div className="full-searchbar">
      <div className="searchbar">
        <input
          value={searchValue}
          type="search"
          placeholder="Type a name or an ingredient: Mojito, Sugar..."
          className="input"
          onChange={(e) => handleSearchValue(e.target.value)}
          src={searchlogo}
        />
        <input
          type="image"
          id="image"
          src={searchlogo}
          alt=""
          className="image-logo"
        />
      </div>
    </div>
  );
}

export default SearchBar;
