import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "../assets/navbar.css";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.querySelector(".full-navigation").style.top = "0";
  } else {
    document.querySelector(".full-navigation").style.top = "-50vh";
  }
}

function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails] = useState(["Margarita", "Mojito"]);
  return (
    <div className="full-navigation">
      <nav className="navigation">
        <ul className="navigation-bar">
          <li className="navigation-name">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation-name">
            <Link to="/random">Random Cocktail</Link>
          </li>
          <li className="navigation-name">
            <Link to="/popular-cocktail">Popular Cocktail</Link>
          </li>
        </ul>
        <SearchBar
          searchValue={searchValue}
          handleSearchValue={setSearchValue}
        />
        {cocktails
          .filter((cocktail) => cocktail.includes(searchValue))
          .map(
            (
              cocktail // (cocktail,id) modifié impossible de fix
            ) => (
              <p>{cocktail}</p> // <p>key={id}</p> modifié impossible de fix
            )
          )}
      </nav>
    </div>
  );
}

export default NavBar;
