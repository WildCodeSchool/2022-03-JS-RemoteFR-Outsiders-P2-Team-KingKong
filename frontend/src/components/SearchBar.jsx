import React from "react";
import searchlogo from "../assets/magnifying-glass-search-svgrepo-com.svg";
import "../assets/searchbar.css";

function SearchBar() {
  return (
    <div className="full-searchbar">
      <div className="searchbar">
        <input
          type="text"
          name="name"
          placeholder="Mojito..."
          className="input"
        />
        <button type="button" className="btn">
          <img src={searchlogo} alt="" className="image-logo" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
