import React from "react";
import searchlogo from "../assets/magnifying-glass-search-svgrepo-com.svg";
import "../assets/searchbar.css";

function SearchBar({ searchValue, setSearchValue }) {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="full-searchbar">
      <div className="searchbar">
        <input
          id="search"
          value={searchValue}
          type="search"
          name="search"
          placeholder="Type something: Mojito, Lemon..."
          className="input"
          onChange={handleChange}
        />
        <input
          value="Submit"
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
